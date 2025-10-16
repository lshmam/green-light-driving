import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const CTA2 = () => {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4 max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
          Ready to Get Started?
        </h1>
        <p className="text-gray-400 mb-4 max-w-2xl mx-auto">
          Book your first lesson today and take the first step towards becoming
          a confident driver.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 justify-center mb-4">
          <a href="tel:+16047511404">
            <Button className="bg-white text-black hover:bg-gray-100 px-8 py-6 rounded-full flex items-center justify-center gap-2">
              <Phone className="w-4 h-4" />
              Give us a call
            </Button>
          </a>
        </div>
        <p className="text-white text-lg">
          Or send us an email at{" "}
          <a
            href="mailto:greenlightdl57@gmail.com"
            className="text-blue-500 hover:underline"
          >
            greenlightdl57@gmail.com
          </a>
        </p>
      </div>
      <div className="mx-auto max-w-4xl h-[450px] mt-12 p-4 md:p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2611.5783424223737!2d-122.86319322402268!3d49.113650382709764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5485db97356dafa7%3A0x61de31f7fd88dc8e!2sGreen%20Light%20Driving%20School!5e0!3m2!1sen!2sca!4v1760651362897!5m2!1sen!2sca"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default CTA2;