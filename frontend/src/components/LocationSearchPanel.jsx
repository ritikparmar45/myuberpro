import React from 'react'

const LocationSearchPanel = (props) => {
   
   
    const location = [
        "24B,Near kapoor's cafe ,shreyians coding School,Bhopal",
        "22o,Near Malhotra's cafe ,shreyians coding School,Bhopal",
        "26c,Near patel's cafe ,shreyians coding School,Bhopal",
        "28B,Near Parmar's cafe ,shreyians coding School,Bhopal",
    ]
    return (
        <div>
            {location.map((elem, idx) => (
                <div 
                    key={idx} 
                    onClick={() => {
                        props.setVehiclePanel(true);
                        props.setPanelOpen(false);
                    }} 
                    className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'
                >
                    <h3 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                        <i className="ri-map-pin-fill "></i>
                    </h3>
                    <h4 className='font-medium'>{elem}</h4>
                </div>
            ))}
        </div>
    );
    

}
export default LocationSearchPanel;