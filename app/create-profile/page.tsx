"use client";
import { TextField, Button, Container, Box } from "@mui/material";
import { useState } from "react";

function CreateProfile() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const [step, setStep] = useState(1);

  return (
    <div className="min-h-screen bg-amber-50 flex justify-center items-center p-4">
      <div className="w-full max-w-2xl bg-card rounded-lg shadow-sm border border:bg-gray-300 p-8">
        {/* header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Create Your Profile</h1>
          <p>Join Blumiora and get started</p>
        </div>

        {/* progress steps */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1 ? "bg-primary text-white" : "bg-accentGray"
              }`}
            >
              1
            </div>
            <div
              className={`flex-1 h-1 mx-2 ${
                step >= 2 ? "bg-primary" : "bg-accentGray"
              }`}
            ></div>
          </div>

          <div className="flex items-center flex-1">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 2 ? "bg-primary text-white" : "bg-accentGray"
              }`}
            >
              2
            </div>
            <div
              className={`flex-1 h-1 mx-2 ${
                step >= 3 ? "bg-primary text-white" : "bg-accentGray"
              }`}
            ></div>
          </div>

          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 3 ? "bg-primary text-white" : "bg-accentGray"
              }`}
            >
              3
            </div>
          </div>
        </div>

        {/* basic info */}
        <div className="space-y-6">
          {step === 1 && (
            <>
              <h2 className="text-xl font-bold">Basic Information</h2>

              <div className="grid grid-cols-2 gap-4">
                <Container sx={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <Box component="form" onSubmit={handleSubmit}>
                    <div className="w-full flex justify-between ">
                      <div>
                        <h2 className="text-xl">First Name</h2>
                        <TextField label="Required" name="username" required className="" />
                      </div>

                      <div>
                        <h2 className="text-xl">Last Name</h2>
                        <TextField fullWidth
                          label="Optional"
                          name="lastname"
                          //   multiline
                          //   rows={4}
                          //   required
                        />
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl">Email Address</h2>
                      <TextField
                        label="Email"
                        name="email"
                        type="email"
                        required
                      />
                    </div>

                    <Button type="submit" variant="contained" color="primary">
                      Continue
                    </Button>
                  </Box>
                </Container>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CreateProfile;
