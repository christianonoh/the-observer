import styles from "@/styles"


const Banner = () => {
  return (
    <div className={`${styles.xPaddings} py-2 border-b`}>
      <div className="max-w-7xl mx-auto flex md:flex-row flex-col justify-between md:items-center">
        <div className="text-slate-800">
          <h1 className="text-5xl">
            The Observer's Blog
          </h1>
          <h2 className="mt-5 md-mt-0">
          Where
          {' '}
          <span className="underline decoration-primary decoration-4">

          curiosity seamlessly intertwines with inspiration!
          </span>
          </h2>
        </div>
        <p className="mt-5 md:mt-2 text-slate-500 max-w-sm">
          Discover, Learn, Inspire. Your daily dose of diverse insights—from tech to travel, wellness to cuisine.
        </p>
      </div>
    </div>
  )
}

export default Banner
