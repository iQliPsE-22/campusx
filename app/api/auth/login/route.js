import { NextResponse } from "next/server";
import { getDb } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import jwt  from "jsonwebtoken";
export async function POST(req) {
  try {
    const { email, password } = await req.json();
    if (!email || !password) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }
    const db = await getDb();
    const user = await db.collection("users").findOne({ email });
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );
    return NextResponse.json({ ok: true, token });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
