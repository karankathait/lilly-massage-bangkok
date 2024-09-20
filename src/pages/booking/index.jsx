import { useSearchParams } from "next/navigation";
import { therapists } from "@/data/therapists";
import { pricing } from "@/data/pricing";
import { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Input, Textarea } from "@nextui-org/react";
import Footer from "@/components/Footer.jsx";
import Navbar from "@/components/Navbar.jsx";
import Header2 from "@/components/Header2";

const Index = () => {
  const searchParams = useSearchParams();
  const therapistId = searchParams.get("id");

  const therapist = therapists.find((t) => t.id === parseInt(therapistId));

  const [currentStep, setCurrentStep] = useState(1);
  const [selectedMassage, setSelectedMassage] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState(null);
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

  const handleMassageChange = (selectedOption) => {
    const massage = pricing.find((m) => m.id === selectedOption.value);
    setSelectedMassage(massage);
    setSelectedDuration(null);
    setPrice("");
  };

  const handleDurationChange = (selectedOption) => {
    const selectedDuration = selectedOption.value;
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

  const massageOptions = pricing.map((massage) => ({
    value: massage.id,
    label: massage.name,
  }));

  const durationOptions =
    selectedMassage?.prices.map((priceOption) => ({
      value: priceOption.duration,
      label: `${priceOption.duration} min`,
    })) || [];

  return (
    <div className="w-full flex flex-col dark:bg-black ">
      <Navbar />
      <Header2 title={`Our Therapist`} backgroundImageUrl="/header-img-2.jpg" />
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-5 py-10 w-full">
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
            <div className="flex justify-between items-center mb-5">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === 1
                    ? "bg-[#DEB678] text-white"
                    : "bg-gray-300 text-gray-700"
                } font-bold`}
              >
                1
              </div>
              <div className="w-full h-1 bg-gray-300 mx-2">
                <div
                  className={`h-1 ${
                    currentStep >= 2 ? "bg-[#DEB678]" : "bg-gray-300"
                  }`}
                  style={{ width: "100%" }}
                ></div>
              </div>
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  currentStep === 2
                    ? "bg-[#DEB678] text-white"
                    : "bg-gray-300 text-gray-700"
                } font-bold`}
              >
                2
              </div>
            </div>

            {currentStep === 1 && (
              <>
                <h2 className="text-xl font-bold mb-4 dark:text-white">
                  Select Massage & Duration
                </h2>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Massage Type
                  </label>
                  <Select
                    value={
                      selectedMassage
                        ? {
                            value: selectedMassage.id,
                            label: selectedMassage.name,
                          }
                        : null
                    }
                    onChange={handleMassageChange}
                    options={massageOptions}
                    className="mb-4"
                    placeholder="Choose Massage"
                  />
                </div>
                {selectedMassage && (
                  <>
                    <div className="mb-4">
                      <label className="block text-gray-700 dark:text-white mb-2">
                        Duration
                      </label>
                      <Select
                        value={
                          selectedDuration
                            ? {
                                value: selectedDuration,
                                label: `${selectedDuration} min`,
                              }
                            : null
                        }
                        onChange={handleDurationChange}
                        options={durationOptions}
                        placeholder="Choose Duration"
                      />
                    </div>
                    {price && (
                      <div className="mb-4">
                        <p className="text-lg font-semibold dark:text-white">
                          Price: <span className="text-[#DEB678]">{price}</span>
                        </p>
                      </div>
                    )}
                  </>
                )}

                <div className="flex gap-2 mb-5">
                  <div className="">
                    <label className="block text-gray-700 dark:text-white mb-2">
                      Appointment Date
                    </label>
                    <DatePicker
                      selected={appointmentDate}
                      onChange={(date) => setAppointmentDate(date)}
                      dateFormat="P"
                      className="w-full dark:text-slate-200 p-2 border rounded"
                      placeholderText="Select Date"
                    />
                  </div>
                  <div className="">
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
                      className="w-full p-2 border rounded dark:text-slate-200"
                      placeholderText="Select Time"
                    />
                  </div>
                </div>

                <button
                  type="button"
                  className="bg-[#DEB678] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#b78a55] transition-colors duration-300"
                  onClick={nextStep}
                  disabled={
                    !selectedMassage ||
                    !selectedDuration ||
                    !appointmentDate ||
                    !appointmentTime
                  }
                >
                  Next
                </button>
              </>
            )}

            {currentStep === 2 && (
              <>
                <h2 className="text-xl font-bold mb-4 dark:text-white">
                  Your Information
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
                    className="bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors duration-300"
                    onClick={prevStep}
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="bg-[#DEB678] text-white py-2 px-4 rounded-md hover:bg-[#b78a55] transition-colors duration-300"
                  >
                    Submit
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
