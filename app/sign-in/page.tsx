import { SignIn } from "@clerk/nextjs"

function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn forceRedirectUrl="/dashboard" />
    </div>
  )
}

export default SignInPage
