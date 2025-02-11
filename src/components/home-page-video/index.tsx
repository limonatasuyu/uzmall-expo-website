function HomePageVideo() {
  return (
    <div className="relative w-[320px] mx-auto rounded-2xl flex-shrink-0">
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
        <div className="animate-pulse text-gray-500">Loading...</div>
      </div>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[320px] h-[700px] object-cover rounded-2xl"
        preload="none"
      >
        <source src="/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export { HomePageVideo };