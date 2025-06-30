import React, { useState } from 'react';
import { runGemini } from '../Gemini';

const Generate: React.FC = () => {
  const [taskPrompt, setTaskPrompt] = useState('');
  const [tasks, setTasks] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const handleTaskGenerate = async () => {
    const trimmed = taskPrompt.trim();
    if (!trimmed) {
      alert("Enter a topic to generate tasks");
      return;
    }

    setLoading(true);

    try {
      const responseText = await runGemini(`Generate 5 learning tasks for: ${trimmed}`);
      const lines = responseText.split('\n').filter(line => line.trim() !== '');
      setTasks(lines);
    } catch (err) {
      alert("Error generating tasks from Gemini.");
    }

    setLoading(false);
  };

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">

      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/gradient_background_video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 overflow-y-auto max-h-screen p-6 text-center bg-black/70">
        <div className="flex flex-col items-center justify-start min-h-screen">
          <div className="bg-white/20 p-10 rounded-xl shadow-lg backdrop-blur-md w-full max-w-2xl">
            <h1 className="text-3xl font-bold m-6 bg-gradient-to-r from-pink-500 via-blue-400 to-pink-500 bg-clip-text text-transparent">
              Generate Task
            </h1>

            <input
              value={taskPrompt}
              onChange={(e) => setTaskPrompt(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full mb-4 text-black"
              placeholder="Enter a topic (e.g., JavaScript)"
            />

            <button
              onClick={handleTaskGenerate}
              disabled={loading}
              className="bg-gradient-to-r from-pink-500 via-blue-400 to-pink-500 font-semibold p-2 rounded-lg text-white"
            >
              {loading ? 'Generating...' : 'Generate Tasks'}
            </button>

            <ul className="text-left mt-6 list-disc list-inside text-white text-sm">
              {tasks.map((task, i) => (
                <li key={i}>{task}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Generate;
