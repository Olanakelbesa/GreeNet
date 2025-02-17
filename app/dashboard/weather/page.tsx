import React from 'react'
import CircularProgressbar from '../overview/CircularProgressbar'
import { IoFilterOutline, IoLocationOutline, IoSettingsOutline } from 'react-icons/io5'

function page() {
  return (
    <div className='px-2'>
      <div className='flex justify-between items-center '>
        <div className='text-2xl font-semibold  py-3'>Weather</div>
        <div>
          <div className="flex gap-4  w-full ">
                    <button className="flex items-center gap-2 border border-[#29bb49] border-opacity-20 rounded-lg p-2 px-3 ">
                      <IoSettingsOutline />
                      <p>Setting</p>
                    </button>
                    <button className="flex items-center gap-2 border border-[#29bb49] border-opacity-20 rounded-lg p-2 px-3 ">
                      <IoFilterOutline />
                      <p>Filter</p>
                    </button>
                  </div>
        </div>
      </div>
      <div>
        <div className='fle flex-col gap-2'>
          <h1 className='text-lg font-semibold '>Region</h1>
          <div className='flex gap-1 items-center py-2'>
            <IoLocationOutline/>
            <p>Addis Ababa, Ethiopia</p>
          </div>
        </div>
				<div className="flex gap-4 flex-wrap justify-between">
					<CircularProgressbar
						name="Temperature"
						progress={75}
						percentage={15}
						isTemperature={true}
            isWindSpeed={false}
						image={"/images/sun.png"}
					/>
					<CircularProgressbar
						name="Humidity"
						progress={50}
						percentage={10}
						isTemperature={false}
            isWindSpeed={false}
						image={"/images/drop.png"}
					/>
					<CircularProgressbar
						name="Wind Speed"
						progress={30}
						percentage={5}
						isTemperature={false}
            isWindSpeed={false}
						image={"/images/cloud-drizzle.png"}
					/>
					<CircularProgressbar
						name="Wind Speed"
						progress={30}
						percentage={5}
						isTemperature={false}
            isWindSpeed={true}
						image={"/images/wind.png"}
					/>
				</div>
      </div>
    </div>
  )
}

export default page