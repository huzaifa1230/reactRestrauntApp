function Team() {
  return (
    <>
      <div className="m-8">
        <h2 className="pt-6 text-3xl font-bold  text-black text-center  pb-8 ">
          Our Kitchen Masters
        </h2>

        <div className="flex justify-center">
          <div className="flex flex-wrap justify-center">
            {/* First Team Member */}
            <div className="flex max-w-xs mx-4 mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image */}
              <img
                src="https://img.freepik.com/free-photo/portrait-young-female-chef-cutting-vegetables-commercial-kitchen_1142-50898.jpg?t=st=1714992646~exp=1714996246~hmac=189eea9ee5c56ddadb4ffbb6875897dd073f213cbd97955245f4891a126999e6&w=740" // Replace with actual image source
                alt="Team Member 1"
                className="w-40 h-50 object-cover object-center"
              />
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">
                  Margaret Rosa
                </h3>
                <p className="text-gray-600">Role: Chief Chef</p>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            {/* Second Team Member */}
            <div className="flex max-w-xs mx-4 mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image */}
              <img
                src="https://img.freepik.com/free-photo/chef-making-ok-sign-white-background_1368-2804.jpg?t=st=1714992843~exp=1714996443~hmac=34ab7863aa0aa5ef179147497e46f88051936f4bff11f27ce3eaa7ee1195c226&w=740" // Replace with actual image source
                alt="Team Member 2"
                className="w-40 h-50 object-cover object-center"
              />
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">Jane Smith</h3>
                <p className="text-gray-600">Role: Senior Chef</p>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            {/* Third Team Member */}
            <div className="flex max-w-xs mx-4 mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image */}
              <img
                src="https://img.freepik.com/free-photo/smiling-male-baker-with-freshly-baked-breads_23-2147888470.jpg?t=st=1714993292~exp=1714996892~hmac=554f51ddf24c62866b849a305ac7b06a3ab95a28467dcf7fa8e9a5bde660f096&w=740" // Replace with actual image source
                alt="Team Member 2"
                className="w-40 h-50 object-cover object-center"
              />
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">Gary Eric</h3>
                <p className="text-gray-600">Role: Chef</p>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            {/* Fourth Team Member */}
            <div className="flex max-w-xs mx-4 mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image */}
              <img
                src="https://img.freepik.com/free-photo/young-female-pastry-chef-decorating-cupcakes-kitchen-restaurant_1142-43432.jpg?t=st=1714993152~exp=1714996752~hmac=6ba1241565f4e82d31312e2086190ce52f9c52117cb7a9b6ffed5bbf310ba2ad&w=740" // Replace with actual image source
                alt="Team Member 2"
                className="w-40 h-50 object-cover object-center"
              />
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">Lana Smith</h3>
                <p className="text-gray-600">Role: Chef</p>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            {/* FIfth Team Member */}
            <div className="flex max-w-xs mx-4 mb-8 bg-white rounded-lg shadow-lg overflow-hidden">
              {/* Image */}
              <img
                src="https://img.freepik.com/free-photo/medium-shot-chef-posing_23-2148723238.jpg?t=st=1714993400~exp=1714997000~hmac=f754a60eceaada2408562d5953e4e4f5bcc4666150d6625c8555395ee7e8b0b6&w=740" // Replace with actual image source
                alt="Team Member 2"
                className="w-40 h-50 object-cover object-center"
              />
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-black">
                  James Charles
                </h3>
                <p className="text-gray-600">Role: Chef</p>
                <p className="mt-2 text-gray-700">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
