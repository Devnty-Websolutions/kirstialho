import SpotifyPreview from "@/components/SpotifyPreview";

const person = {
  firstName: "Kirsti",
  lastName: "Alho",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Composer, Vocal Coach, Jazz Vocalist",
  avatar: "/images/avatar.jpg",
  // location: "Europe/Berlin", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: [
    // "English",
    //  "German"
  ], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I am Kirsti, a singer-songwriter based in Saarbrücken, Germany. Subscribe
      to my newsletter to stay up to
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Facebook",
    icon: "facebook",
    link: "https://www.facebook.com/kirstimirjamialho",
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/@kirstialho3035",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:jazzalho@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Kirsti Alho</>,
  subline: (
    <>
      <p>Composer</p>
      <p>Saarbrücken, Germany</p>
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/kirsti-alho",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        <p>
          The roots of Kirsti Alho musicality reach far deeper than her studies
          in classical piano and voice in her native Finland. There has always
          been an inborn need for musical creativity in Kirsti, which expresses
          itself in her deeply personal interpretations and her inspired
          improvisations.
        </p>
        <p>
          After touring with international jazz musicians, Kirsti established
          herself in Germany where she has continued to broaden her repertoire
          from swing to modern jazz. Kirsti touches her audiences with soulful,
          mellow ballads; she excites them with new visions of old standards;
          her dynamic scatting shoots ripples of energy through the room.
          Kirsti`s voice moves.
        </p>
        <p>
          It glides. It soars. And then so does the listener. Kirsti has worked
          with many famous finnish jazz musicians and with such internationally
          artists as Al Jerreau, Archie Shepp, Horace Parlan, Siegfried Kessler,
          Horst Jankowski, Charly Antolini, Umo-Jazzorchestra and many others.
        </p>
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Music",
    experiences: [
      {
        // company: "Kirsti Alho",
        timeframe: "",
        // role: "Composer",
        achievements: [
          <SpotifyPreview trackId="2we7oE1IJQ9RT3cakEx710" />,
          <SpotifyPreview trackId="1qrlK2LtfqlGgV8CBbM1e3" />,
          <SpotifyPreview trackId="0gcqIZZTjIcBYXX4MmNyDp" />,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          // {
          //   src: "/images/cover.png",
          //   alt: "Once UI Project",
          //   width: 16,
          //   height: 9,
          // },
        ],
      },
      // {
      //   company: "Creativ3",
      //   timeframe: "2018 - 2022",
      //   role: "Lead Designer",
      //   achievements: [
      //     <>
      //       Developed a design system that unified the brand across multiple
      //       platforms, improving design consistency by 40%.
      //     </>,
      //     <>
      //       Led a cross-functional team to launch a new product line,
      //       contributing to a 15% increase in overall company revenue.
      //     </>,
      //   ],
      //   images: [],
      // },
    ],
  },
  studies: {
    display: false, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University of Jakarta",
        description: <>Studied software engineering.</>,
      },
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },
    ],
  },
  technical: {
    display: false, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: (
          <>Able to prototype in Figma with Once UI with unnatural speed.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: (
          <>Building next gen apps with Next.js + Once UI + Supabase.</>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Blog",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Compositions and vocal peices by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "Gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
