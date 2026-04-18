import { useEffect, useState } from "react";
import cn from "../../lib/cn";
import { TeamMemberCard } from "./One";

const Two = () => {
  const [isMore, setIsMore] = useState(false);

  const [teamMembers, setTeamMembers] = useState(2);

  useEffect(() => {
    const handleClick = (e: KeyboardEvent) => {
      e.preventDefault();
      console.log(e);
      const key = e.key;
      console.log({ key });

      if (e.key === "Control" && e.key === "k") {
        alert("Vikas");
      }
    };

    document.addEventListener("keydown", handleClick);

    return () => {
      document.removeEventListener("keydown", handleClick);
    };
  }, []);

  return (
    <>
      <section className={cn("bg-gray-300")}>
        {/* Team */}
        <div
          className={cn("h-30", {
            "h-1000": isMore,
          })}
        >
          {/* {Array.from({ length: teamMembers }).map((_, index) => (
            <TeamMemberCard key={index} memberId={index + 1} />
          ))} */}
        </div>

        {/* button */}
        <div
          className={cn("", {
            "bottom-0 sticky": isMore,
          })}
        >
          <button
            onClick={() => {
              setIsMore((p) => !p);
              //   setTeamMembers(isMore ? 2 : 15);
            }}
            className={cn("bg-black text-white p-2 px-5 rounded-2xl", {})}
          >
            {isMore ? "Less" : "More"}
          </button>
        </div>
      </section>

      <Lorem />
    </>
  );
};

export default Two;

function Lorem() {
  return (
    <>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum culpa
      ratione corrupti harum id vel dicta asperiores doloribus suscipit, placeat
      architecto accusantium voluptatum impedit assumenda fugiat eveniet
      voluptatibus eos, mollitia, velit minima cupiditate ad. Ea vero neque
      aspernatur laboriosam quasi, esse vitae. Nihil cupiditate, facilis ea
      magni impedit omnis! Deserunt hic numquam libero laudantium vel ullam
      quasi nostrum repellendus facilis, corporis rerum, blanditiis recusandae.
      Ducimus ea placeat laudantium quisquam, deleniti veniam, iure eius dolor
      rem accusantium officiis consequuntur nemo, quae distinctio temporibus
      nesciunt cum! Error libero reprehenderit fugit aliquam totam, perferendis
      ab aperiam eum assumenda quae, itaque ex! Quae ipsum vel pariatur et
      aliquid soluta maxime eos, ipsa voluptate iusto, neque quos fugit. Officia
      rem sapiente incidunt, dolorum delectus repudiandae ipsam necessitatibus.
      Ipsam modi soluta expedita. Dicta blanditiis architecto libero aspernatur
      commodi reprehenderit, explicabo eos reiciendis facilis, placeat
      perspiciatis molestiae sit nesciunt dolores totam sequi nam impedit ipsam,
      consequuntur saepe amet. Incidunt iste neque iure voluptatibus aliquid
      illo quam magnam unde earum quasi possimus blanditiis tenetur, maiores
      laborum obcaecati consequatur tempore ipsa? Minima reiciendis iure quaerat
      dolore labore possimus perspiciatis nemo sit voluptates, rem veritatis
      vitae delectus nihil exercitationem atque minus, sunt, voluptate voluptas
      facere tempore eaque odit. Minus doloribus suscipit repudiandae ipsum
      dolorum quaerat repellendus sapiente porro, aliquid iusto! Nisi illo
      excepturi voluptate accusantium provident fuga eos saepe perferendis
      nulla, dolorem aspernatur iusto cum temporibus molestias quam totam eum
      laborum a assumenda qui delectus. Eveniet id mollitia iusto cum saepe
      tempora! Atque minus nobis modi tempora? Mollitia eius esse eveniet ad
      doloribus ducimus. Cupiditate, dolorem provident totam voluptate veniam,
      nobis enim quibusdam voluptates est ducimus, ab odio. Quo quos quibusdam
      voluptatibus impedit possimus sit rerum aliquam ipsum nihil recusandae
      illum, expedita asperiores alias distinctio dicta aspernatur voluptas
      voluptate amet explicabo, quae nemo! Incidunt explicabo dicta tenetur
      autem! Ad adipisci vel impedit numquam quidem, eaque sed quod. Laborum
      rerum nemo numquam soluta blanditiis harum animi nihil assumenda labore
      dolorum, temporibus aperiam consequatur itaque vitae modi ea, maxime nulla
      molestias repellat! Eius, necessitatibus pariatur non illum unde
      voluptatum at facere consequuntur facilis odio laborum nobis commodi,
      eligendi esse nostrum voluptates voluptatibus odit aut nisi sequi totam
      cupiditate quis. Distinctio libero iste odio, laborum reprehenderit vitae
      accusantium eveniet dicta dolores repudiandae voluptatem iusto commodi! Ea
      sint repellat impedit adipisci obcaecati dolore, earum maiores, in
      perspiciatis blanditiis, vel eum consectetur fuga quasi officia iusto
      tempore cumque corporis quod. Temporibus unde consectetur dolorem iusto.
      Nesciunt delectus facilis quidem repellendus earum, sunt velit suscipit
      officiis at possimus! Asperiores cupiditate deleniti esse, magnam eaque
      modi ullam dignissimos aperiam voluptas, aliquam perferendis, ipsam
      dolores repellendus dolorum tempora? Quasi, officia. Inventore tempore
      doloremque, sequi saepe doloribus eaque, optio consequuntur quo aliquam
      sunt dolore, aliquid vel nisi a expedita corrupti. Dolorum porro pariatur
      fugiat ipsum accusantium quae cupiditate iste maiores inventore dolore
      minima, id iusto ipsam reiciendis beatae aliquid omnis, illo veritatis
      corporis. Aperiam earum consequatur in accusamus quia? Excepturi
      distinctio debitis aliquid unde. Saepe, similique ipsum expedita autem
      rerum, doloremque ab voluptas ut deleniti amet quibusdam repellendus
      atque.
    </>
  );
}
