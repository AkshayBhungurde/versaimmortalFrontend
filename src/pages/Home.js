// // // import Head from "next/head";

// // // export default function Home() {
// // //   return (
// // //     <>
// // //       <Head>
// // //         <title>Top IT Company | Web, App, Software & SaaS Development</title>
// // //         <meta
// // //           name="description"
// // //           content="We are a leading IT company offering web development, mobile app development, software solutions, SaaS products, and digital marketing services."
// // //         />
// // //         <meta
// // //           name="keywords"
// // //           content="IT Company, Web Development, App Development, Software Development, SaaS, Digital Marketing"
// // //         />
// // //         <meta name="author" content="Your IT Company Name" />
// // //         <meta name="viewport" content="width=device-width, initial-scale=1" />
// // //       </Head>

// // //       {/* Header / Hero Section */}
// // //       <header className="bg-gradient-to-r from-blue-700 to-indigo-700 text-white">
// // //         <div className="max-w-7xl mx-auto px-6 py-24 text-center">
// // //           <h1 className="text-4xl md:text-6xl font-bold mb-6">
// // //             Building Future-Ready Digital Solutions
// // //           </h1>
// // //           <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
// // //             We help businesses grow with cutting-edge Web, Mobile, Software,
// // //             SaaS, and Digital Marketing solutions.
// // //           </p>
// // //           <div className="flex justify-center gap-4 flex-wrap">
// // //             <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100">
// // //               Get Free Consultation
// // //             </button>
// // //             <button className="border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700">
// // //               Our Services
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </header>

// // //       {/* About Section */}
// // //       <section className="py-20 bg-gray-50">
// // //         <div className="max-w-7xl mx-auto px-6 text-center">
// // //           <h2 className="text-3xl md:text-4xl font-bold mb-6">
// // //             About Our IT Company
// // //           </h2>
// // //           <p className="text-gray-600 max-w-4xl mx-auto">
// // //             We are a technology-driven IT company delivering scalable, secure,
// // //             and innovative digital solutions. From startups to enterprises, we
// // //             transform ideas into powerful digital products.
// // //           </p>
// // //         </div>
// // //       </section>

// // //       {/* Services Section */}
// // //       <section className="py-20">
// // //         <div className="max-w-7xl mx-auto px-6">
// // //           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
// // //             Our Services
// // //           </h2>

// // //           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
// // //             {services.map((service, index) => (
// // //               <div
// // //                 key={index}
// // //                 className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition"
// // //               >
// // //                 <h3 className="text-xl font-semibold mb-4">
// // //                   {service.title}
// // //                 </h3>
// // //                 <p className="text-gray-600">{service.description}</p>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </section>

// // //       {/* CTA Section */}
// // //       <section className="bg-indigo-700 text-white py-20">
// // //         <div className="max-w-7xl mx-auto px-6 text-center">
// // //           <h2 className="text-3xl md:text-4xl font-bold mb-6">
// // //             Let’s Build Your Next Digital Product
// // //           </h2>
// // //           <p className="mb-8 max-w-2xl mx-auto">
// // //             Partner with us to create powerful, scalable, and future-proof
// // //             digital solutions.
// // //           </p>
// // //           <button className="bg-white text-indigo-700 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100">
// // //             Contact Us Today
// // //           </button>
// // //         </div>
// // //       </section>

// // //       {/* Footer */}
// // //       <footer className="bg-gray-900 text-gray-300 py-10">
// // //         <div className="max-w-7xl mx-auto px-6 text-center">
// // //           <p>
// // //             © {new Date().getFullYear()} Your IT Company Name. All Rights
// // //             Reserved.
// // //           </p>
// // //         </div>
// // //       </footer>
// // //     </>
// // //   );
// // // }

// // // const services = [
// // //   {
// // //     title: "Web Development",
// // //     description:
// // //       "Modern, responsive, and SEO-friendly websites using latest technologies.",
// // //   },
// // //   {
// // //     title: "Mobile App Development",
// // //     description:
// // //       "High-performance Android and iOS apps tailored to your business needs.",
// // //   },
// // //   {
// // //     title: "Software Development",
// // //     description:
// // //       "Custom software solutions to automate and scale your business.",
// // //   },
// // //   {
// // //     title: "SaaS Development",
// // //     description:
// // //       "Secure, scalable, and cloud-based SaaS products built for growth.",
// // //   },
// // //   {
// // //     title: "Digital Marketing",
// // //     description:
// // //       "SEO, PPC, social media, and marketing strategies to boost your online presence.",
// // //   },
// // //   {
// // //     title: "UI/UX Design",
// // //     description:
// // //       "User-centric designs that deliver exceptional digital experiences.",
// // //   },
// // // ];









// // import React from "react";
// // import { Helmet } from "react-helmet-async";


// // export default function Home() {
// //   return (
// //     <services>
// //       {/* SEO */}
// //       <Helmet>
// //         <title>Top IT Company | Web, App, SaaS & Digital Marketing</title>
// //         <meta
// //           name="description"
// //           content="Leading IT company providing web development, app development, software solutions, SaaS products and digital marketing services."
// //         />
// //         <meta
// //           name="keywords"
// //           content="IT Company, Web Development, App Development, Software Development, SaaS, Digital Marketing"
// //         />
// //       </Helmet>

// //       {/* HERO SECTION */}
// //       <section className="hero">
// //         <div className="container">
// //           <h1>Building Smart Digital Solutions</h1>
// //           <p>
// //             We deliver Web, Mobile, Software, SaaS, and Digital Marketing
// //             solutions to grow your business.
// //           </p>
// //           <div className="buttons">
// //             <button>Get Free Consultation</button>
// //             <button className="outline">Our Services</button>
// //           </div>
// //         </div>
// //       </section>

// //       {/* ABOUT */}
// //       <section className="about">
// //         <div className="container">
// //           <h2>About Our IT Company</h2>
// //           <p>
// //             We are a professional IT company helping startups and enterprises
// //             with scalable, secure, and innovative digital solutions.
// //           </p>
// //         </div>
// //       </section>
      

// //       {/* SERVICES */}
// //       <section className="services">
// //         <div className="container">
// //           <h2>Our Services</h2>
// //           <div className="grid">
// //             <Service
// //               title="Web Development"
// //               text="SEO-friendly, fast, and modern websites."
// //             />
// //             <Service
// //               title="App Development"
// //               text="High-quality Android & iOS applications."
// //             />
// //             <Service
// //               title="Software Development"
// //               text="Custom software solutions for business growth."
// //             />
// //             <Service
// //               title="SaaS Development"
// //               text="Cloud-based scalable SaaS platforms."
// //             />
// //             <Service
// //               title="Digital Marketing"
// //               text="SEO, PPC & social media marketing services."
// //             />
// //             <Service
// //               title="UI/UX Design"
// //               text="User-focused design for better conversions."
// //             />
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA */}
// //       <section className="cta">
// //         <h2>Let’s Build Your Next Project</h2>
// //         <button>Contact Us</button>
// //       </section>

      
// //     </>
// //   );
// // }

// // function Service({ title, text }) {
// //   return (
// //     <div className="card">
// //       <h3>{title}</h3>
// //       <p>{text}</p>
// //     </div>
// //   );
// // }





// import React from "react";
// import { Helmet } from "react-helmet-async";

// export default function Home() {
//   return (
//     <>
//       {/* SEO */}
//       <Helmet>
//         <title>Top IT Company | Web, App, SaaS & Digital Marketing</title>
//         <meta
//           name="description"
//           content="Leading IT company providing web development, app development, software solutions, SaaS products and digital marketing services."
//         />
//         <meta
//           name="keywords"
//           content="IT Company, Web Development, App Development, Software Development, SaaS, Digital Marketing"
//         />
//       </Helmet>

//       <main>
//         {/* HERO SECTION */}
//         <section className="hero">
//           <div className="container">
//             <h1>Building Smart Digital Solutions</h1>
//             <p>
//               We deliver Web, Mobile, Software, SaaS, and Digital Marketing
//               solutions to grow your business.
//             </p>
//             <div className="buttons">
//               <button>Get Free Consultation</button>
//               <button className="outline">Our Services</button>
//             </div>
//           </div>
//         </section>

//         {/* ABOUT */}
//         <section className="about">
//           <div className="container">
//             <h2>About Our IT Company</h2>
//             <p>
//               We are a professional IT company helping startups and enterprises
//               with scalable, secure, and innovative digital solutions.
//             </p>
//           </div>
//         </section>

//         {/* SERVICES */}
//         <section className="services">
//           <div className="container">
//             <h2>Our Services</h2>
//             <div className="grid">
//               <Service
//                 title="Web Development"
//                 text="SEO-friendly, fast, and modern websites."
//               />
//               <Service
//                 title="App Development"
//                 text="High-quality Android & iOS applications."
//               />
//               <Service
//                 title="Software Development"
//                 text="Custom software solutions for business growth."
//               />
//               <Service
//                 title="SaaS Development"
//                 text="Cloud-based scalable SaaS platforms."
//               />
//               <Service
//                 title="Digital Marketing"
//                 text="SEO, PPC & social media marketing services."
//               />
//               <Service
//                 title="UI/UX Design"
//                 text="User-focused design for better conversions."
//               />
//             </div>
//           </div>
//         </section>

//         {/* CTA */}
//         <section className="cta">
//           <h2>Let’s Build Your Next Project</h2>
//           <button>Contact Us</button>
//         </section>
//       </main>
//     </>
//   );
// }

// function Service({ title, text }) {
//   return (
//     <div className="card">
//       <h3>{title}</h3>
//       <p>{text}</p>
//     </div>
//   );
// }



import React from "react";
import { Helmet } from "react-helmet-async";
import Services from "./Services";
import About from "./About";

export default function Home() {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Top IT Company | Web, App, SaaS & Digital Marketing</title>
        <meta
          name="description"
          content="Leading IT company providing web development, app development, software solutions, SaaS products and digital marketing services."
        />
        <meta
          name="keywords"
          content="IT Company, Web Development, App Development, Software Development, SaaS, Digital Marketing"
        />
      </Helmet>

      <main>
        {/* HERO */}
        <section className="hero">
          <div className="container">
            <h1>Building Smart Digital Solutions</h1>
            <p>
              We deliver Web, Mobile, Software, SaaS, and Digital Marketing
              solutions to grow your business.
            </p>
            <div className="buttons">
              <button>  <a href="contact">Get Free Consultation</a></button>
              <button className="outline">  Our Services </button>
            </div>
          </div>
        </section>

         

        {/* SERVICES (Imported) */}
        <Services />

        
        <About />
      </main>
    </>
  );
}
