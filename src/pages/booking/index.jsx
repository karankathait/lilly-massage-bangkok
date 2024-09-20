import { useSearchParams } from "next/navigation";
import { therapists } from "@/data/therapists";
import { pricing } from "@/data/pricing";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import Header2 from "@/components/Header2";

const Index = () => {
  const searchParams = useSearchParams();
  const therapistId = searchParams.get("id");

  const therapist = therapists.find((t) => t.id === parseInt(therapistId));

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMassage, setSelectedMassage] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("");
  const [price, setPrice] = useState("");
  const [appointmentDate, setAppointmentDate] = useState(new Date());
  const [appointmentTime, setAppointmentTime] = useState(new Date());
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    hotel: "",
    address: "",
    roomNo: "",
    notes: "",
  });

  const handleMassageChange = (e) => {
    const massageId = parseInt(e.target.value);
    const massage = pricing.find((m) => m.id === massageId);
    setSelectedMassage(massage);
    setSelectedDuration("");
    setPrice("");
  };

  const handleDurationChange = (e) => {
    const selectedDuration = e.target.value;
    setSelectedDuration(selectedDuration);
    const price = selectedMassage.prices.find(
      (p) => p.duration === selectedDuration
    )?.price;
    setPrice(price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Booking details", {
      selectedMassage,
      selectedDuration,
      price,
      appointmentDate,
      appointmentTime,
      formData,
      therapist,
    });
  };

  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  console.log("price : ",price)
  console.log("selected massage : ",selectedMassage)
  console.log("selected duration : ",selectedDuration)

  return (
    <div className="dark:bg-black">
      <Navbar />
      <Header2 title={`Our Therapist`} backgroundImageUrl="/header-img-2.jpg" />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-5 py-10">
        {therapist && (
          <div className="w-full md:w-1/2 overflow-hidden border border-[#DEB678]">
            <div className="p-4 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {therapist.name}
              </h2>
            </div>
            <img
              src={therapist.image}
              alt={therapist.name}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <div className="w-full md:w-1/2 border border-[#DEB678]">
          <form onSubmit={handleSubmit} className="p-4 md:p-8">
            <div className="mb-2">
              <div className="flex justify-between mb-5">
                <div className={`step ${currentStep === 1 ? "active" : ""}`}>
                  1
                </div>
                <div className={`step ${currentStep === 2 ? "active" : ""}`}>
                  2
                </div>
                <div className={`step ${currentStep === 3 ? "active" : ""}`}>
                  3
                </div>
              </div>
            </div>

            {currentStep === 1 && (
              <>
                <h2 className="text-xl font-bold mb-2 dark:text-white">
                  Select Massage
                </h2>
                <div className="mb-4">
                  <select
                    value={selectedMassage.id || ""}
                    onChange={handleMassageChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">-- Choose Massage --</option>
                    {pricing.map((massage) => (
                      <option key={massage.id} value={massage.id}>
                        {massage.name}
                      </option>
                    ))}
                  </select>
                </div>
                {selectedMassage && (
                  <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2 dark:text-white">
                      Select Duration
                    </h2>
                    <select
                      value={selectedDuration}
                      onChange={handleDurationChange}
                      className="w-full p-2 border rounded"
                      required
                    >
                      <option value="">-- Choose Duration --</option>
                      {selectedMassage.prices.map((priceOption, index) => (
                        <option key={index} value={priceOption.duration}>
                          {priceOption.duration}
                        </option>
                      ))}
                    </select>
                  </div>
                )}
                {price && (
                  <div className="mb-4">
                    <p className="text-lg font-semibold">
                      Price: <span className="text-[#DEB678]">{price}</span>
                    </p>
                  </div>
                )}
                <button
                  type="button"
                  className="bg-[#DEB678] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#b78a55] transition-colors duration-300"
                  onClick={nextStep}
                  disabled={!selectedMassage || !selectedDuration}
                >
                  Next
                </button>
              </>
            )}

            {currentStep === 1 && (
              <>
                <h2 className="text-xl font-bold mb-2 dark:text-white">
                  Select Massage
                </h2>
                <div className="mb-4">
                  <Select
                    label="Select Massage"
                    value={selectedMassage?.id || ""}
                    onChange={handleMassageChange}
                    className="w-full"
                    required
                  >
                    <SelectItem value="">-- Choose Massage --</SelectItem>
                    {pricing.map((massage) => (
                      <SelectItem key={massage.id} value={massage.id}>
                        {massage.name}
                      </SelectItem>
                    ))}
                  </Select>
                </div>

                {selectedMassage && (
                  <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2 dark:text-white">
                      Select Duration
                    </h2>
                    <Select
                      label="Select Duration"
                      value={selectedDuration}
                      onChange={handleDurationChange}
                      className="w-full"
                      required
                    >
                      <SelectItem value="">-- Choose Duration --</SelectItem>
                      {/* {selectedMassage.prices.map((priceOption, index) => (
            <SelectItem key={index} value={priceOption.duration}>
              <span className="flex justify-between w-full">
                <span>{priceOption.duration}</span>
                <span className="text-gray-500 ml-4">
                  ({priceOption.price})
                </span>
              </span>
            </SelectItem>
          ))} */}

                      {selectedMassage.prices.map((priceOption, index) => (
                        <SelectItem key={index} value={priceOption.duration}>
                          {priceOption.duration}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                )}

                {price && (
                  <div className="mb-4">
                    <p className="text-lg font-semibold">
                      Price: <span className="text-[#DEB678]">{price}</span>
                    </p>
                  </div>
                )}
                <button
                  type="button"
                  className="bg-[#DEB678] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#b78a55] transition-colors duration-300"
                  onClick={nextStep}
                  disabled={!selectedMassage || !selectedDuration}
                >
                  Next
                </button>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h2 className="text-xl font-bold mb-4 dark:text-white">
                  Step 2: Select Date & Time
                </h2>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Appointment Date
                  </label>
                  <DatePicker
                    selected={appointmentDate}
                    onChange={(date) => setAppointmentDate(date)}
                    dateFormat="P"
                    className="w-full p-2 border rounded"
                    required
                    placeholderText="Select Date"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Appointment Time
                  </label>
                  <DatePicker
                    selected={appointmentTime}
                    onChange={(date) => setAppointmentTime(date)}
                    showTimeSelect
                    showTimeSelectOnly
                    timeIntervals={15}
                    dateFormat="h:mm aa"
                    className="w-full p-2 border rounded"
                    required
                    placeholderText="Select Time"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-gray-600 transition-colors duration-300"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    className="bg-[#DEB678] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#b78a55] transition-colors duration-300"
                    onClick={nextStep}
                    disabled={!appointmentDate || !appointmentTime}
                  >
                    Next
                  </button>
                </div>
              </>
            )}

            {currentStep === 3 && (
              <>
                <h2 className="text-xl font-bold mb-4 text-slate-600 dark:text-slate-200">
                  Step 3: Your Information
                </h2>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="w-full">
                    <Input
                      label="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      name="name"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      label="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      name="phone"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="w-full">
                    <Input
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      name="email"
                      required
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      label="Hotel/Condominium"
                      value={formData.hotel}
                      onChange={handleInputChange}
                      name="hotel"
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-4 mb-4">
                  <div className="w-full">
                    <Input
                      label="Address (Soi)"
                      value={formData.address}
                      onChange={handleInputChange}
                      name="address"
                    />
                  </div>
                  <div className="w-full">
                    <Input
                      label="Room No."
                      value={formData.roomNo}
                      onChange={handleInputChange}
                      name="roomNo"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <Textarea
                    label="Notes"
                    placeholder="Enter your notes"
                    value={formData.notes}
                    onChange={handleInputChange}
                    name="notes"
                  />
                </div>
                <div className="flex justify-between">
                  <button
                    type="button"
                    className="bg-gray-500 text-white py-2 px-4 rounded-md mt-4 hover:bg-gray-600 transition-colors duration-300"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-[#DEB678] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#b78a55] transition-colors duration-300"
                  >
                    Submit Booking
                  </button>
                </div>
              </>
            )}
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
