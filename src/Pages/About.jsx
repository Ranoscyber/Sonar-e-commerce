function About() {
  return (
    <div className="flex justify-center items-center h-[90vh] lg:h-[66vh] max-w-[90%] lg:max-w-5xl mx-auto my-10 font-jost">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        <div>
            <img src="./about_us.jpg" alt="" />
        </div>
        <div>
          <h1 className="text-3xl text-center font-bold mb-10">Our Story</h1>
          <p>
            Our journey began with a simple dream — to bring style, comfort, and
            confidence into everyone’s wardrobe. We started as a small team
            passionate about fashion and self-expression, believing that clothes
            are more than fabric — they tell your story. Each piece we design is
            made with care,Every collection is inspired by
            real people and real moments. Thank you for being part of our story
            your support makes our dream possible.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
