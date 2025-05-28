// app/api/auth/signup/route.js
import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const db = await getDb();
    const existing = await db.collection("users").findOne({ email });
    if (existing) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashPwd = await bcrypt.hash(password, salt);

    // insert user
    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashPwd,
      createdAt: new Date(),
    });

    return NextResponse.json({ ok: true, userId: result.insertedId });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
