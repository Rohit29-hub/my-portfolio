export const skillData = (): Map<string,object[]> => {
    const skill = new Map<string, object[]>();
    const frontend = [
        { title: "Html", level: ""},
        {title: "Css",level: ""},
        {title: "Reactjs",level: "intermediate"},
        {title: "Nextjs",level: "intermediate"},
        {title: "Tailwind",level: "advance"},
        {title: "Javascript",level: ""},
        {title: "Typescript",level: "intermediate"}
    ];
    
    const backend = [
        { title: "Node Js", level: "intermediate" },
        { title: "Express Js", level: "intermediate" },
        { title: "Next Auth", level: "" },
        { title: "Rest Api", level: "advance" },
    ];
    
    const databases = [
        { title: "MongoDB", level: "advance" },
        { title: "Redis", level: "" },
        { title: "PostgreSQL", level: "advance" },
        { title: "MySql", level: "basic" },
    ];
    
    const others = [
        { title: "Github", level: "" },
        { title: "Git", level: "advance" },
        { title: "Vs code", level: "" },
        { title: "Aws", level: "intermediate" },
        { title: "Docker", level: "basic" },
    ];

    skill.set("frontend", frontend);
    skill.set("backend", backend);
    skill.set("databases", databases);
    skill.set("others", others);

    return skill;
}



