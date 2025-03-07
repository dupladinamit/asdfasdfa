import React from "react";

const RegistrationTutorial = () => {
  const steps = [
    {
      id: 1,
      title: "Register with BloFin",
      description: "Create an account on BloFin to get started.",
    },
    {
      id: 2,
      title: "Register with Photon",
      description: "Sign up on Photon to continue the process.",
    },
    {
      id: 3,
      title: "Insert your Email Address",
      description: "Provide your email address for verification.",
    },
    {
      id: 4,
      title: "Gain Instant Access",
      description: "Complete the registration and gain instant access.",
    },
  ];

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://via.placeholder.com/1920x1080')",
      }}
    >
      <div className="w-full max-w-2xl bg-gray-800 bg-opacity-90 rounded-xl shadow-lg p-4 sm:p-6">
        {/* Video Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">
            Gem Hunters Lite Sign Up Tutorial
          </h1>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Cseréld le a valós videó linkjére
              title="Gem Hunters Onboarding Tutorial"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </div>

        {/* Steps Section */}
        <div className="space-y-6">
          {steps.map((step) => (
            <div key={step.id} className="bg-gray-700 p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-white">
                Step {step.id}
              </h2>
              <p className="text-gray-300 mt-2">{step.title}</p>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Continue Button */}
        <div className="mt-8">
          <a
            href="https://example.com/register" // Cseréld le a valós regisztrációs linkre
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full p-4 text-center rounded-md bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Continue To Registration
          </a>
        </div>
      </div>
    </div>
  );
};

export default RegistrationTutorial;
