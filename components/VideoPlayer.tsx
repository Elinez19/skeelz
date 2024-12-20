"use client";

import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import { PlayCircle } from "lucide-react";

interface VideoPlayerProps {
  videoUrl: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const videoId = videoUrl && videoUrl.includes("youtube.com")
  ? videoUrl.split("v=")[1]?.split("&")[0] || ""  // YouTube video ID
  : videoUrl && videoUrl.includes("vimeo.com")
  ? videoUrl.split("/").pop() || ""  // Vimeo video ID
  : "";  // Default to empty string if not recognized

  return (
    <div className="relative aspect-video rounded-lg overflow-hidden">
      <div className="relative">
        <div
          onClick={() => setIsOpen(true)}
          className="absolute inset-0 flex items-center justify-center bg-black/40 cursor-pointer"
        >
          <PlayCircle className="w-16 h-16 text-white" />
        </div>
      </div>

      {/* React Modal Video */}
      <ModalVideo
        channel="youtube"
        isOpen={isOpen}
        videoId={videoId}
        onClose={() => setIsOpen(false)}
      />
    </div>
  );
};

export default VideoPlayer;
