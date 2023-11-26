import Container from "@/components/Container";
import { Card } from "@/components/ui/card";



export default function Page() {
  return (
    <Container>
      <Card className="p-4 bg-white shadow-lg rounded-xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Welcome to CV Builder</h1>
        <div className="text-lg mb-4 space-y-4 text-gray-700">
          <p>
            Your personal gateway to crafting a standout Curriculum Vitae (CV) that encapsulates your professional narrative.
          </p>
          <p>
            In today’s competitive job market, having a CV that not only details your experience but also resonates with employers is crucial.
          </p>
          <p>
            Our platform is meticulously designed to help you achieve just that – a CV that speaks volumes about your skills, experiences, and professional aspirations.
          </p>
          <p>
            With CV Builder, the power to create a compelling and visually appealing CV is at your fingertips.
          </p>
          <p>
            Our intuitive and user-friendly interface simplifies the CV creation process, allowing you to input your information with ease and customize your CV to suit your unique style and professional needs.
          </p>
          <p>
            Choose from a variety of templates, each crafted to cater to different professional tones and industries, ensuring that your CV stands out in the pile.
          </p>
          <p>
            Our commitment to your career success goes beyond CV creation. We understand that your professional journey evolves, and so should your CV. Thats why we offer features to save and edit your CVs at any time.
          </p>
        </div>
      </Card>
    </Container>
  );
}