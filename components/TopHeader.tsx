import Image from "next/image";

// Component for displaying contact information (phone number and email)
const ContactInfo = () => (
  <div className="flex gap-x-[1.7rem]">
    {/* Phone number section */}
    <div className="flex items-center gap-x-1">
      <Image
        src="/images/icons/call-icon.png"
        alt="Call-icon"
        width={13}
        height={13}
      />
      <p>(225) 555-0118</p>
    </div>
    {/* Email address section */}
    <div className="flex items-center gap-x-1">
      <Image
        src="/images/icons/mail-icon.png"
        alt="Mail-icon"
        width={13}
        height={13}
      />
      <p>michelle.rivera@example.com</p>
    </div>
  </div>
);

// Component for displaying social media icons (Instagram, YouTube, etc.)
const SocialMediaIcons = () => (
  <div className="flex gap-x-1 items-center">
    {/* Instagram Icon */}
    <Image
      src="/images/icons/instagram-icon.png"
      alt="Instagram-icon"
      width={20}
      height={20}
    />
    {/* YouTube Icon */}
    <Image
      src="/images/icons/youtube-icon.png"
      alt="YouTube-icon"
      width={20}
      height={20}
    />
    {/* Facebook Icon */}
    <Image
      src="/images/icons/facebook-icon.png"
      alt="Facebook-icon"
      width={20}
      height={20}
    />
    {/* Twitter Icon */}
    <Image
      src="/images/icons/twitter-icon.png"
      alt="Twitter-icon"
      width={20}
      height={20}
    />
  </div>
);

// Main TopHeader component that combines contact info and social media icons
const TopHeader = () => {
  return (
    // Header container hidden on small screens and styled for larger screens
    <header className="hidden sm:flex items-center w-full h-10 bg-darkbackgroundColor">
      {/* Inner container for content alignment and text styling */}
      <div className="container mx-auto font-semibold text-[0.550rem] md:text-[0.700rem] text-lighttextColor">
        <div className="flex justify-around items-center">
          {/* Left section: Contact information */}
          <ContactInfo />
          {/* Center section: Promotional message */}
          <p>Follow Us and get a chance to win 80% off</p>
          {/* Right section: Social media icons */}
          <div className="flex items-center space-x-1">
            <p>Follow Us &nbsp; :</p>
            <SocialMediaIcons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
