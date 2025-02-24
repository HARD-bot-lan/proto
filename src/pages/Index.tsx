import { useEffect, useState } from "react";
import { Calendar, Download, Mail, MapPin } from "lucide-react";

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date("2025-05-15T00:00:00"); // D-Day: 15 Mai 2025
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime(); 

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div className="flex items-center justify-center gap-4 md:gap-8 mt-8 animate-fade-up" style={{ animationDelay: "800ms" }}>
      <div className="text-center bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
        <span className="text-2xl font-bold text-white">{timeLeft.days}</span>
        <span className="block text-sm text-white">Jours</span>
      </div>
      <div className="text-center bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
        <span className="text-2xl font-bold text-white">{timeLeft.hours}</span>
        <span className="block text-sm text-white">Heures</span>
      </div>
      <div className="text-center bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
        <span className="text-2xl font-bold text-white">{timeLeft.minutes}</span>
        <span className="block text-sm text-white">Minutes</span>
      </div>
      <div className="text-center bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors">
        <span className="text-2xl font-bold text-white">{timeLeft.seconds}</span>
        <span className="block text-sm text-white">Secondes</span>
      </div>
    </div>
  );
};

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Logos */}
      <header className="absolute top-0 left-0 right-0 z-10 bg-white/10 backdrop-blur-sm">
        <div className="w-full mx-auto py-[12px] px-4 md:px-8 lg:px-16 xl:px-32 rounded-sm">
          <div className="flex items-center justify-between">
            <a href="https://www.um5.ac.ma/" target="_blank" rel="noopener noreferrer">
              <img alt="Université Mohammed V Logo" className="h-16 md:h-20" src="/Media/universite-mohamed-v-rabat-maroc-seeklogo.png" />
            </a>
            <a href="https://www.emi.ac.ma/" target="_blank" rel="noopener noreferrer">
              <img alt="EMI Logo" className="h-16 md:h-20" src="/Media/da969761-5b3c-4446-bd85-8eb98efb2836.png" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="w-full h-full object-cover scale-105 transition-transform duration-[20s]"
          >
            <source src="/Media/Technology Network Background. 4827668 Stock Video at Vecteezy.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-700/95 via-primary-600/90 to-primary-800/95 backdrop-blur-[2px]" />
        </div>
        {/* Content Section */}
        <div className={`relative container mx-auto px-6 text-center transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-2 tracking-tight">
              <span className="inline-block animate-fade-up" style={{ animationDelay: "200ms" }}>
                JNITI' 2025
              </span>
            </h1>
            {/* Subheading */}
            <p className="text-xl md:text-3xl text-white/90 mb-12 font-light leading-relaxed max-w-3xl mx-auto">
              <span className="inline-block animate-fade-up" style={{ animationDelay: "400ms" }}>
                4<sup>ème</sup> Journée Nationale d'Innovation Technologique en Ingénierie
              </span>
            </p>
            {/* Date and Location */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-white/90 animate-fade-up" style={{ animationDelay: "600ms" }}>
              {/* Date */}
              <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300">
  <Calendar className="w-6 h-6" />
  <span className="text-lg">15 Mai 2025</span>
</div>
              {/* Location */}
              <a href="https://maps.app.goo.gl/FL1xKfJGaiMFQsS88" target="_blank" rel="noopener noreferrer">
  <div className="flex items-center gap-3 bg-white/10 px-6 py-3 rounded-full backdrop-blur-sm hover:bg-white/20 hover:scale-105 transition-all duration-300">
    <MapPin className="w-6 h-6" />
    <span className="text-lg">Ecole Mohammadia d'Ingénieurs</span>
  </div>
</a>
            </div>
            {/* Countdown Timer */}
            <CountdownTimer />
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
  <div className="container mx-auto px-6">
    <div className="max-w-4xl mx-auto">
      {/* Section Heading */}
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
        L'Innovation au Service de l'Emergence
      </h2>
      <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
        Découvrez les étapes clés de notre événement dédié à l'innovation technologique
      </p>

      {/* Timeline */}
      <div className="space-y-12">
        {/* Timeline Item */}
        <div className="flex flex-col md:flex-row gap-6 items-start animate-fade-up hover:transform hover:scale-[1.02] transition-all duration-300">
          {/* Date Card */}
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-6 min-w-[140px] text-center shadow-sm">
            <div className="font-bold text-primary-700 text-lg">13 Avril</div>
            <div className="text-primary-600 text-sm">2025</div>
          </div>
          {/* Content Card */}
          <div className="flex-1 bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
            <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Date limite de soumission des projets
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Soumettez vos projets innovants avant cette date. Assurez-vous que votre proposition réponde aux critères de sélection.
            </p>
          </div>
        </div>

        {/* Timeline Item */}
        <div className="flex flex-col md:flex-row gap-6 items-start animate-fade-up hover:transform hover:scale-[1.02] transition-all duration-300">
          {/* Date Card */}
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-6 min-w-[140px] text-center shadow-sm">
            <div className="font-bold text-primary-700 text-lg">15 Avril</div>
            <div className="text-primary-600 text-sm">2025</div>
          </div>
          {/* Content Card */}
          <div className="flex-1 bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
            <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
              Acceptation des projets
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Les candidats retenus seront notifiés par email. Les critères de sélection incluent l'innovation, la faisabilité et l'impact potentiel.
            </p>
          </div>
        </div>

        {/* Timeline Item */}
        <div className="flex flex-col md:flex-row gap-6 items-start animate-fade-up hover:transform hover:scale-[1.02] transition-all duration-300">
          {/* Date Card */}
          <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl p-6 min-w-[140px] text-center shadow-sm">
            <div className="font-bold text-primary-700 text-lg">18-19</div>
            <div className="text-primary-600 text-sm">Avril 2025</div>
          </div>
          {/* Content Card */}
          <div className="flex-1 bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.1)] transition-all duration-300">
            <h3 className="font-bold text-xl text-gray-900 mb-3 flex items-center gap-2">
              <svg className="w-6 h-6 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              Présentation et sélection
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Les équipes sélectionnées présenteront leurs projets devant un jury d'experts. Les meilleurs projets seront récompensés lors de la cérémonie de clôture.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Registration Section */}
      <section className="relative flex items-center justify-center overflow-hidden py-20">
  {/* Video Background */}
  <div className="absolute inset-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      className="w-full h-full object-cover scale-105 transition-transform duration-[20s]"
    >
      <source src="/Media/Technology Network Background. 4827668 Stock Video at Vecteezy.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    {/* Gradient Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-primary-700/95 via-primary-600/90 to-primary-800/95 backdrop-blur-[2px]" />
  </div>

  {/* Content */}
  <div className="relative container mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-white mb-8">
      Comment Participer
    </h2>
    <div className="bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 mb-8 max-w-2xl mx-auto border border-white/20">
      {/* Step 1: Access the Document */}
      <div className="mb-8">
      <div className="mb-8">
  <div className="inline-block border-2 border-white/30 rounded-lg px-6 py-3 bg-white/10 backdrop-blur-sm">
    <h3 className="text-xl font-semibold text-white mb-0">
      Accédez au formulaire d'inscription
    </h3>
  </div>
</div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {/* QR Code Option */}
          <div className="flex flex-col items-center">
            <img
              src="/Media/d34903f7-0096-4502-acad-7e809eb7dfba.png"
              alt="QR Code"
              className="w-48 h-48 mb-4"
            />
            <p className="text-white/80">Scannez le QR code</p>
          </div>
          {/* Or Divider */}
          <div className="text-white/60 font-semibold">OU</div>
          {/* Download Button Option */}
          <div className="flex flex-col items-center">
  <a
    href="https://emiuniversity-my.sharepoint.com/:f:/g/personal/kaddioui_emi_ac_ma/ErLiXuS6YAJDpTzKDX_bZhoBSHBSdQQ306wPcu22mv3QFA?e=OZc5uf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center justify-center gap-2 bg-primary-500 text-white px-6 py-3 rounded-lg hover:bg-primary-600 ring-2 ring-white hover:scale-105 transition-transform"
  >
    <Download className="w-5 h-5" />
    Télécharger le formulaire
  </a>
</div>
        </div>
      </div>

      {/* Step 2: Send Email */}
      <div className="mb-8">
        
      <div className="mb-8">
  <div className="inline-block border-2 border-white/30 rounded-lg px-6 py-3 bg-white/10 backdrop-blur-sm">
    <h3 className="text-xl font-semibold text-white mb-0">
      Envoyez le formulaire
    </h3>
  </div>
</div>
        <p className="text-white/80 mb-4">
          Une fois rempli, envoyez le formulaire à l'adresse suivante :
        </p>
        <div className="inline-flex items-center gap-2 text-white hover:text-primary-200 transition-colors">
          <Mail className="w-5 h-5" />
          <a href="mailto:emminovtech@emi.ac.ma" className="hover:underline">
            emminovtech@emi.ac.ma
          </a>
        </div>
      </div>
    </div>

    {/* Pour plus d'informations Section (Unmodified) */}
    <div className="text-center">
      <p className="text-white/80 mb-4">Pour plus d'informations :</p>
      <div className="inline-flex items-center gap-2 text-white hover:text-primary-200 transition-colors">
        <Mail className="w-5 h-5" />
        <a href="mailto:ammor@emi.ac.ma" className="hover:underline">
          ammor@emi.ac.ma
        </a>
      </div>
    </div>
  </div>
</section>

    </div>
  );
};

export default Index;