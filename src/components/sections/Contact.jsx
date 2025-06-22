import ContactForm from "../ContactForm";


export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800 dark:text-white">
          Contact Me
        </h2>
        
        <div className="mx-auto">
          <ContactForm />
          
          <div className="mt-12 text-center text-gray-600 dark:text-gray-400">
            <p>Or email me directly at: <span className="text-primary">dipeshmeshram79@gmail      .com</span></p>
          </div>
        </div>
      </div>
    </section>
  );
}