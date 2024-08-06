import icon from './icons8-triangle-48.png'
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-white justify-between p-2">
      <div className="flex flex-col gap-3">
        <div className="flex flex-row">
          <img loading="lazy" 
          srcSet="https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=1 1x, https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=2 2x, https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop&dpr=3 3x" 
          src="https://ph-files.imgix.net/3153ed76-d013-4a2b-a7ac-f2f4cbfc3cc4.png?auto=compress&codec=mozjpeg&cs=strip&auto=format&w=72&h=72&fit=crop"
          style={{width: 72, height: 72}} 
          alt="VideoDubber - Fast Video Translator" 
          className="m-2" />
          
          <div className="flex flex-1 flex-row items-start justify-end" />
        </div>
        <div className="flex flex-1 flex-col justify-between gap-6 sm:flex-row">
          <div className="flex flex-col gap-2">
            <h1 className="flex  text-2xl font-bold text-dark-gray ">
              VideoDubber - Fast Video Translator
              <a href="#" className="ml-2 mt-4 " data-test="post-actions" aria-label="Post actions">
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={7} viewBox="0 0 12 7" className="">
                  <path fill="#CCC8C7" d="M5.998 6.244a1 1 0 0 1-.703-.292L1.048 1.705A1.003 1.003 0 0 1 1.05.293.996.996 0 0 1 2.462.29L6 3.83 9.538.29a1.003 1.003 0 0 1 1.412.003.997.997 0 0 1 .002 1.412L6.705 5.952a1 1 0 0 1-.702.29z" />
                </svg>
              </a>
            </h1>
            <h2 className="text-xl text-gray-600 font-sans">Translate videos in your own voice, globalize in a click!</h2>
          </div>
        
          <div className="flex flex-row items-end gap-3">
            <button type="button" data-test="get-it-button" className="p-4 border border-slate-300 rounded-md sm:rounded-sm">
              <div className="flex flex-row items-center justify-center">
                <div className="text-14 mr-2 font-semibold text-dark-gray">Visit</div>
                <svg xmlns="http://www.w3.org/2000/svg" width={12} height={7} viewBox="0 0 12 7">
                  <path fill="#CCC8C7" d="M5.998 6.244a1 1 0 0 1-.703-.292L1.048 1.705A1.003 1.003 0 0 1 1.05.293.996.996 0 0 1 2.462.29L6 3.83 9.538.29a1.003 1.003 0 0 1 1.412.003.997.997 0 0 1 .002 1.412L6.705 5.952a1 1 0 0 1-.702.29z" />
                </svg>
              </div>
            </button>
            <button type="button" data-test="vote-button" className="flex justify-center items-center p-4 w-full border border-l-2 border-r-2 border-t-2 border-b-2 border-red-300 rounded-md ">
              <div className="flex flex-row items-center justify-center">
                <div className="" />
                <div className="flex flex-row text-md font-semibold text-dark-gray uppercase">
                  <div><img src={icon.src} className="mr-2 mt-1 h-4"/></div>
                  <div>Upvoted{/* */} {/* */}</div>
                  </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
