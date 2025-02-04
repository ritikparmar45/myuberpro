import React from "react";

const CaptainDetails = ()=> {
    return (
        <div>
              <div className="h-1/2 p-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start gap-3">
                        <img src=" " alt=""></img>
                        <h4 className="text-lg font-medium">Harsh Patel</h4>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold">ru295.20</h4>
                        <p className="text-sm bg-gray-600">Earned</p>
                    </div>
                </div>
                <div className="flex justify-center gap-5 items-start">

                    <div className="text-center">
                        <i className=" text-2xl font-thin ri-timer-2-line"></i>
                        <h5 className="text-lg font-medium">10.2</h5>
                        <p className="text-sm text-gray-600">Hour Online</p>
                    </div>
                    <div className="text-center">
                        <i className=" text-2xl font-thin ri-speed-up-line"></i>
                        <h5 className="text-lg font-medium">10.2</h5>
                        <p className="text-sm text-gray-600">Hour Online</p>
                    </div>
                    <div className="text-center">
                        <i className=" text-2xl font-thin ri-booklet-line"></i>
                        <h5 className="text-lg font-medium">10.2</h5>
                        <p className="text-sm text-gray-600">Hour Online</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CaptainDetails