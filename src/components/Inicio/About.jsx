
const About = () => {
    return (
        <section id="services" className="sm:p-10 lg:p-20 p-5">
          <div className="container mx-auto">
            <h2 className="text-center text-4xl font-bold pt-10 sm:pt-0 pb-10">Services</h2>
            <div className="sm:grid grid-cols-2">
              <div className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
                <h3 className="text-xl mb-5 font-bold">Web Design</h3>
                <p className="leading-10 text-gray-500 text-justify">
                  As a dedicated web design professional,
                  I bring a creative and strategic approach to crafting visually stunning and user-centric
                  websites.
                  With a keen eye for aesthetics and a commitment to delivering exceptional user experiences,
                  my goal is to translate your brand identity into a captivating online presence.
                </p>
              </div>
    
              {/* Other service sections go here */}
    
              <div className="sm:p-10 p-5 bg-gray-50 sm:me-5 mb-10 rounded-md hover:shadow-md">
                <h3 className="text-xl mb-5 font-bold">Graphic Design</h3>
                <p className="leading-10 text-gray-500 text-justify">
                  With expertise in graphic design tools and techniques,
                  I create visually appealing graphics tailored to your brand and messaging.
                  From logos and branding materials to marketing collateral and social media graphics,
                  I ensure that your visual identity resonates with your target audience and leaves a lasting impression.
                </p>
                <div className="mt-5">
                  <img className="w-full h-auto rounded-md" src="https://via.placeholder.com/400" alt="Graphic Design" />
                </div>
              </div>
    
            </div>
          </div>
        </section>
      );
}

export default About