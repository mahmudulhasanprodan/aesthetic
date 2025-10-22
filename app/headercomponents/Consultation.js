import Container from "@/app/headercomponents/Container"

export default function Consultation() {
    return (
      <div>
        <Container>
          <div className="flex items-center justify-between py-16">
            <div className="w-1/3 relative">
              <div className="w-[350px] h-[500px] bg-white shadow-3xl absolute -top-72 p-4">
                <div className="pt-6 pl-6">
                  <h2 className="font-semibold text-sm text-gray-400">
                    REQUEST FOR YOUR
                  </h2>
                  <h1 className="font-bold text-3xl mt-2">Consultation</h1>
                </div>
                <form>
                  <div className="pt-4 flex flex-col gap-y-6">
                    <div className="flex items-center justify-center w-full">
                      <input
                        type="text"
                        placeholder="Name"
                        id="Name"
                        name="Name"
                        className="pl-3 w-[280px] py-2 border-[1] border-gray-200 rounded-md outline-black"
                      />
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <input
                        type="email"
                        placeholder="Email"
                        id="Email"
                        name="Email"
                        className="pl-3 w-[280px] py-2 border-[1] border-gray-200 rounded-md outline-black"
                      />
                    </div>
                    <div className="flex items-center justify-center w-full">
                      <input
                        type="date"
                        placeholder="Date"
                        id="Date"
                        name="Date"
                        className="pl-3 w-[280px] py-2 border-[1] border-gray-200 rounded-md outline-black"
                      />
                    </div>
                    <div className="flex items-center justify-center">
                        <select className="py-3 w-[280px] rounded-md cursor-pointer pl-2">
                            <option className="font-medium text-sm">Type of service</option>
                            <option className="font-medium text-sm">Advanced equipment</option>
                            <option className="font-medium text-sm">Qulified doctors</option>
                            <option className="font-medium text-sm">Certified doctors</option>
                            <option className="font-medium text-sm">Emergency care</option>
                        </select>
                    </div>
                    <button className="font-semibold cursor-pointer text-md bg-blue-400 text-white rounded-md py-3">BOOK APPOINMENT</button>
                  </div>
                </form>
              </div>
            </div>
            <div className="w-1/3 px-2">
              <h2 className="font-semibold text-md">Welcome to Aesthetic</h2>
              <h1 className="font-bold text-4xl mt-2">
                Find Best Doctors With <span>AESTHETIC</span>
              </h1>
              <p className="text-sm mt-3">
                30 Years of experience in Cosmetic Surgery.Lorem ipsum dolor sit
                amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
            <div className="w-1/3">
               <div>   <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/PXsuI67s2AA?si=ebd2a42BFkQnC2eW"
                title="YouTube video player"
                allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe></div>
            </div>
          </div>
        </Container>
      </div>
    );
};