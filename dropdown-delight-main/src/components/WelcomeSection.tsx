const WelcomeSection = () => {
  return (
    <section className="section-pad bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <p className="heading-lead">Welcome</p>
          <h2 className="heading-section with-line center mb-8">
            Welcome to E&R Global Resources Ltd
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            We are a dynamic Oil and Gas Service company dedicated to providing world-class
            upstream solutions through strategic international partnerships.
          </p>
          <p className="leading-relaxed">
            With over 15 years of experience, we continue to deliver specialized services
            across drilling, casing, cementing, and equipment supply — all in one place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
