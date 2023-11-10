import styles from "@/styles"


const Banner = () => {
  return (
    <div className={`${styles.xPaddings} py-5 border-b`}>
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col justify-between lg:items-center">
        <div className="text-slate-800 font-bold">
          <h1 className="text-5xl">
            The Observer's Blog
          </h1>
          <h2 className="mt-5 lg:mt-3">
          Where
          {' '}
          <span className="underline decoration-primary decoration-4">

          curiosity seamlessly intertwines with inspiration!
          </span>
          </h2>
        </div>
        <p className="mt-5 lg:mt-0 text-slate-500 max-w-sm">
          Discover, Learn, Inspire. Your daily dose of diverse insights—from tech to travel, wellness to cuisine.
        </p>
      </div>
    </div>
  )
}

export default Banner
