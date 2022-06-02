const Talent = () => {
  return (
    <div className="w-full h-[736px] flex flex-col lg:flex-row">
      <div className="talent rounded-t-2xl"></div>
      <div className="bg-[#FDF3F0] w-full p-8 rounded-b-2xl">
        <div className="max-w-lg mx-auto text-center">
          <h3 className="text-peach text-4xl font-medium leading-tight mb-4">World-class talent</h3>
          <p className="text-darkGrey">
            We are a crew of strategists, problem-solvers, and technologists.
            Every design is thoughtfully crafted from concept to launch,
            ensuring success in its given market. We are constantly updating our
            skills in a myriad of platforms. Our team is multi-disciplinary and
            we are not merely interested in form — content and meaning are just
            as important. We give great importance to craftsmanship, service,
            and prompt delivery. Clients have always been impressed with our
            high-quality outcomes that encapsulates their brand’s story and
            mission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Talent;
