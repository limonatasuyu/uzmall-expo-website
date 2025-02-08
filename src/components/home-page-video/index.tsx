function HomePageVideo() {
  return (
    <div className="relative w-[320px] mx-auto rounded-2xl max-[950px]:mt-10">
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