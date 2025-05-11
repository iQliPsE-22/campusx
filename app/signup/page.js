"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Eye,
  EyeOff,
  ArrowRight,
  KeyRound,
  Mail,
  User,
  AlertCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import Headline from "@/custom-components/Headline";
const Page = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));

    // Clear error when user types
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    // Check password strength
    if (name === "password") {
      const strength = calculatePasswordStrength(value);
      setPasswordStrength(strength);
    }
  };

  const calculatePasswordStrength = (password) => {
    if (!password) return 0;

    let strength = 0;

    // Length check
    if (password.length >= 8) strength += 1;

    // Character checks
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/[0-9]/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    return Math.min(strength, 4);
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength === 0) return "Weak";
    if (passwordStrength === 1) return "Weak";
    if (passwordStrength === 2) return "Medium";
    if (passwordStrength === 3) return "Strong";
    if (passwordStrength === 4) return "Very Strong";
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength === 0) return "bg-red-500";
    if (passwordStrength === 1) return "bg-red-500";
    if (passwordStrength === 2) return "bg-yellow-500";
    if (passwordStrength === 3) return "bg-green-500";
    if (passwordStrength === 4) return "bg-green-500";
  };

  const validateForm = () => {
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    if (!formData.agreeTerms) {
      errors.agreeTerms = "You must agree to the terms and conditions";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      router.push("/login?registered=true");
      // In a real app, you'd handle signup logic here
    }, 1500);
  };
  return (
    <section className="h-full pt-8 p-4 pb-8 lg:p-8 min-h-dvh">
      <Headline
        heading={"CAMPUSX SPACE"}
        text={"Assignments, Trades, and Rentals — All in One Place!"}
        className="text-3xl lg:text-4xl"
      />
      <div className="min-h-dvh flex flex-col lg:flex-row items-center justify-center lg:justify-around">
        <div className="w-4/5 lg:w-1/2 flex justify-center p-2 lg:p-8 ">
          <Image
            src="/signup.svg"
            alt="Writer"
            width="50"
            height="50"
            className="w-full rounded-lg"
          />
        </div>
        <div className="w-full md:w-1/2 max-w-md">
          <Card className="border-gray-800 bg-gray-900/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl">Create an account</CardTitle>
              <CardDescription>
                Sign up to start trading and renting on campus.
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className={`pl-10 bg-gray-800/50 border-gray-700 ${
                          formErrors.name
                            ? "border-red-500"
                            : "focus:border-blue-500"
                        }`}
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    {formErrors.name && (
                      <p className="text-red-500 text-sm flex items-center mt-1">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="name@example.com"
                        className={`pl-10 bg-gray-800/50 border-gray-700 ${
                          formErrors.email
                            ? "border-red-500"
                            : "focus:border-blue-500"
                        }`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-red-500 text-sm flex items-center mt-1">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input
                        id="password"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className={`pl-10 pr-10 bg-gray-800/50 border-gray-700 ${
                          formErrors.password
                            ? "border-red-500"
                            : "focus:border-blue-500"
                        }`}
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-300"
                        tabIndex="-1"
                      >
                        {showPassword ? (
                          <EyeOff className="h-5 w-5" />
                        ) : (
                          <Eye className="h-5 w-5" />
                        )}
                      </button>
                    </div>
                    {formErrors.password ? (
                      <p className="text-red-500 text-sm flex items-center mt-1">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {formErrors.password}
                      </p>
                    ) : (
                      formData.password && (
                        <div className="mt-2">
                          <div className="flex justify-between mb-1">
                            <span className="text-xs">
                              {getPasswordStrengthText()}
                            </span>
                            <span className="text-xs">
                              {passwordStrength >= 3 && (
                                <span className="text-green-500 flex items-center">
                                  <CheckCircle className="h-3 w-3 mr-1" />
                                  Good password
                                </span>
                              )}
                            </span>
                          </div>
                          <div className="h-1 w-full bg-gray-700 rounded-full overflow-hidden">
                            <div
                              className={`h-full ${getPasswordStrengthColor()}`}
                              style={{
                                width: `${(passwordStrength / 4) * 100}%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      )
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <KeyRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-5 w-5" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        className={`pl-10 bg-gray-800/50 border-gray-700 ${
                          formErrors.confirmPassword
                            ? "border-red-500"
                            : "focus:border-blue-500"
                        }`}
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                    </div>
                    {formErrors.confirmPassword && (
                      <p className="text-red-500 text-sm flex items-center mt-1">
                        <AlertCircle className="h-4 w-4 mr-1" />
                        {formErrors.confirmPassword}
                      </p>
                    )}
                  </div>

                  <div className="flex items-start space-x-2 my-2">
                    <Checkbox
                      id="agreeTerms"
                      name="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) =>
                        handleChange({
                          target: {
                            name: "agreeTerms",
                            type: "checkbox",
                            checked,
                          },
                        })
                      }
                      className={formErrors.agreeTerms ? "border-red-500" : ""}
                    />
                    <div className="grid gap-1.5 leading-none">
                      <label
                        htmlFor="agreeTerms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the{" "}
                        <Link
                          href="/terms"
                          className="text-blue-500 hover:text-blue-400 underline"
                        >
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link
                          href="/privacy"
                          className="text-blue-500 hover:text-blue-400 underline"
                        >
                          Privacy Policy
                        </Link>
                      </label>
                      {formErrors.agreeTerms && (
                        <p className="text-red-500 text-xs">
                          {formErrors.agreeTerms}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white mt-2"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <>
                        <span className="animate-pulse">
                          Creating account...
                        </span>
                      </>
                    ) : (
                      <>
                        Create account
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              <div className="relative my-6">
                <Separator className="my-4" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="bg-[#0d1119] px-2 text-sm text-gray-500">
                    OR CONTINUE WITH
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Button
                  variant="outline"
                  className="border-gray-700 hover:border-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 mr-2"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google
                </Button>
                <Button
                  variant="outline"
                  className="border-gray-700 hover:border-gray-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 mr-2 fill-current"
                  >
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                  Facebook
                </Button>
              </div>
            </CardContent>

            <CardFooter>
              <p className="text-sm text-gray-400 text-center w-full">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="text-blue-500 hover:text-blue-400 font-medium"
                >
                  Sign in
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Page;
