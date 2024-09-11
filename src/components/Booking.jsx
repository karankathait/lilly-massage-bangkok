import { useSearchParams } from "next/navigation";
import { therapists } from "@/data/therapists";
import { massages } from "@/data/massages";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
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
    const massage = massages.find((m) => m.id === massageId);
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

  return (
    <div className="dark:bg-black py-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-5">
        {therapist && (
          <div className="w-full md:w-1/2 overflow-hidden border border-[#DEB678]">
            <h1 className="text-4xl font-bold mb-6 dark:text-[#DEB678]">
              Book a Session with {therapist?.name}
            </h1>
            <img
              src={therapist.image}
              alt={therapist.name}
              className="w-full h- object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {therapist.name}
              </h2>
            </div>
          </div>
        )}

        <div className="w-full md:w-1/2 border border-[#DEB678]">
          <form onSubmit={handleSubmit} className="p-6">
            <div className="mb-6">
              <div className="flex justify-between">
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
              {/* <div className="flex justify-between mt-2">
                <p className="text-gray-700 dark:text-white">
                  Step {currentStep} of 3
                </p>
              </div> */}
            </div>

            {currentStep === 1 && (
              <>
                <h2 className="text-xl font-bold mb-2 dark:text-white">
                  Select Massage
                </h2>
                <div className="mb-4">
                  {/* <label className="text-xl font-bold mb-4 dark:text-white">
                    Select Massage
                  </label> */}
                  <select
                    value={selectedMassage.id || ""}
                    onChange={handleMassageChange}
                    className="w-full p-2 border rounded"
                    required
                  >
                    <option value="">-- Choose Massage --</option>
                    {massages.map((massage) => (
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
                    {/* <label className="block text-gray-700 dark:text-white mb-2">
                      Select Duration
                    </label> */}
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

            {currentStep === 2 && (
              <>
                <h2 className="text-xl font-bold mb-4">
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
                <h2 className="text-xl font-bold mb-4">
                  Step 3: Your Information
                </h2>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData((prev) => ({ ...prev, name: e.target.value }))
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        phone: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Hotel/Condominium
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={formData.hotel}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        hotel: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Address (Soi)
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={formData.address}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        address: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Room No.
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded"
                    value={formData.roomNo}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        roomNo: e.target.value,
                      }))
                    }
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 dark:text-white mb-2">
                    Notes
                  </label>
                  <textarea
                    className="w-full p-2 border rounded"
                    value={formData.notes}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        notes: e.target.value,
                      }))
                    }
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#DEB678] text-white py-2 px-4 rounded-md mt-4 hover:bg-[#b78a55] transition-colors duration-300"
                >
                  Submit Booking
                </button>
              </>
            )}
          </form>
        </div>
      </div>

      <style jsx>{`
        .step {
          width: 30px;
          height: 30px;
          background: #e0e0e0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          font-weight: bold;
        }
        .step.active {
          background: #deb678;
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Booking;
