"use client"

import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"
import { Button } from "../ui/button"
import { processRegistration } from "@/actions/register"

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^\+91[6-9]\d{9}$/, { message: "Please enter a valid Indian phone number starting with +91" }),
  occupation: z.string().min(2, { message: "Occupation is required." }),
  goal: z.string().min(1, { message: "Please select a primary goal." }),
  challenge: z.string().optional(),
  terms: z.boolean().refine(val => val === true, {
    message: "You must agree to the Privacy Policy, Terms & Conditions and Refund Policy.",
  }),
})

type FormValues = z.infer<typeof formSchema>

export function RegisterForm() {
  const router = useRouter()
  const [isPending, startTransition] = useTransition()
  const [errorMsg, setErrorMsg] = useState("")

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      terms: false,
    }
  })

  const onSubmit = (data: FormValues) => {
    setErrorMsg("")
    startTransition(async () => {
      const result = await processRegistration(data)
      
      if (result.success && result.redirectUrl) {
        window.location.href = result.redirectUrl
      } else {
        setErrorMsg(result.message || "Failed to initiate payment. Please try again.")
      }
    })
  }

  const goals = [
    "Build a Personal Brand",
    "Grow My Business",
    "Improve My Writing",
    "Create Better Content",
    "Increase Sales Through Communication",
    "Become a Better Copywriter",
    "Learn Consumer Psychology",
    "Build Trust With My Audience",
    "Improve Marketing Skills",
    "Freelancing & Client Acquisition",
    "Content Strategy",
    "Career Growth",
    "Just Curious / Learning",
    "Other",
  ]

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {errorMsg && (
        <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
          {errorMsg}
        </div>
      )}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-[var(--color-foreground)]">Full Name <span className="text-red-500">*</span></label>
        <input
          {...register("fullName")}
          placeholder="Enter your full name"
          className="w-full h-12 px-4 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
        />
        {errors.fullName && <p className="text-sm text-red-500">{errors.fullName.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[var(--color-foreground)]">Email Address <span className="text-red-500">*</span></label>
        <input
          {...register("email")}
          type="email"
          placeholder="Enter your email"
          className="w-full h-12 px-4 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
        />
        {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[var(--color-foreground)]">Phone Number <span className="text-red-500">*</span></label>
        <input
          {...register("phone")}
          placeholder="+91 XXXXX XXXXX"
          className="w-full h-12 px-4 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
        />
        {errors.phone && <p className="text-sm text-red-500">{errors.phone.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[var(--color-foreground)]">Occupation <span className="text-red-500">*</span></label>
        <input
          {...register("occupation")}
          placeholder="Student, Founder, Freelancer, Marketer..."
          className="w-full h-12 px-4 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
        />
        {errors.occupation && <p className="text-sm text-red-500">{errors.occupation.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[var(--color-foreground)]">Primary Goal <span className="text-red-500">*</span></label>
        <select
          {...register("goal")}
          className="w-full h-12 px-4 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all appearance-none"
        >
          <option value="">Select your primary goal...</option>
          {goals.map(goal => (
            <option key={goal} value={goal}>{goal}</option>
          ))}
        </select>
        {errors.goal && <p className="text-sm text-red-500">{errors.goal.message}</p>}
      </div>

      <div className="space-y-2">
        <label className="text-sm font-semibold text-[var(--color-foreground)]">What is your biggest communication or marketing challenge right now?</label>
        <textarea
          {...register("challenge")}
          placeholder="Tell us what you're struggling with..."
          className="w-full h-32 p-4 rounded-xl border border-[var(--color-border)] bg-white text-[var(--color-foreground)] placeholder:text-[var(--color-muted-foreground)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all resize-none"
        />
      </div>

      <div className="flex items-start gap-3 pt-2">
        <input
          type="checkbox"
          id="terms"
          {...register("terms")}
          className="mt-1 w-4 h-4 rounded border-[var(--color-border)] text-[var(--color-primary)] focus:ring-[var(--color-primary)]"
        />
        <label htmlFor="terms" className="text-sm text-[var(--color-muted-foreground)] leading-tight">
          I have read and agree to the Privacy Policy, Terms & Conditions and Refund Policy.
        </label>
      </div>

      <Button
        type="submit"
        disabled={!isValid || isPending}
        size="lg"
        className="w-full h-14 text-lg font-bold shadow-md hover:shadow-xl transition-all duration-300 mt-4 disabled:opacity-50 disabled:hover:translate-y-0"
      >
        {isPending ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Redirecting to Secure Checkout...
          </>
        ) : (
          "Continue to Payment →"
        )}
      </Button>
      
      <p className="text-xs text-center text-[var(--color-muted-foreground)] mt-4">
        By continuing, you agree to our Terms & Conditions, Privacy Policy, and Refund Policy.
      </p>
    </form>
  )
}
