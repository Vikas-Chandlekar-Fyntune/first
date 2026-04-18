const TOTAL_TEAM_MEMBERS = 14;

const One = () => {
  return (
    <>
      <div className="py-8 ps-4 font-semibold space-y-15">
        <div className="space-y-3 ps-20">
          <h1 className="text-4xl">Our team</h1>
          <h5 className="font-light w-1/2 text-lg">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </h5>
        </div>

        {/* Teams */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2">
          {Array.from({ length: TOTAL_TEAM_MEMBERS }).map((_, index) => (
            <TeamMemberCard key={index} memberId={index + 1} />
          ))}
        </div>
      </div>
    </>
  );
};

export default One;

interface ITeamMemberCardProps {
  name?: string;
  position?: string;
  memberId: number;
}

export function TeamMemberCard({
  name = "Michael Foster",
  position = "Co-Founder / CTO",
  memberId,
}: ITeamMemberCardProps) {
  const imageUrl = `https://picsum.photos/seed/${memberId}/300/300`;

  return (
    <div className="p-1 text-center flex flex-col items-center gap-3">
      {/* Image */}
      <img
        src={imageUrl}
        alt={name}
        className="size-20 rounded-full"
        loading="lazy"
      />

      <div>
        {/* Name */}
        <h5 className="font-semibold">{name}</h5>

        {/* Position */}
        <h5 className="font-thin">{position}</h5>
      </div>
    </div>
  );
}
