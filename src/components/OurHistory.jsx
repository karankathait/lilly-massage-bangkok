// components/OurHistory.js

const OurHistory = () => {
    return (
      <div className="flex flex-col lg:flex-row items-center justify-between p-10 bg-white">
        <div className="lg:w-1/2 p-5">
          <h2 className="text-4xl font-bold text-purple-800 mb-5">Our History</h2>
          <p className="text-lg text-gray-700 mb-5">
            Mea ei paulo debitis affert nominati usu eu, et ius dicta detraxit probatus facete.
          </p>
          <p className="text-lg text-gray-700 mb-10">
            Cibo mollis similique an duo, quo ex sale doctus insolens. Tale facilisi electram no vim. Ad ius sonet forensibus, nam quando dissenti et ea. Cum utroque dissentium te, nam cu nullam dolor um.
          </p>
          <div>
            <p className="font-bold text-lg text-purple-900">Samanta Rose</p>
            <p className="text-gray-500">Founder Active SPA center</p>
          </div>
        </div>
        <div className="lg:w-1/2 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <img
            src="/our-history-1.jpg"
            alt="Massage image"
            className="w-full h-auto rounded-lg object-cover"
          />
          <img
            src="/our-history-2.jpg"
            alt="Relaxing bath image"
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
      </div>
    );
  };
  
  export default OurHistory;
  