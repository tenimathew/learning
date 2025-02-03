import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Oracle",
    // Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    Svg: "img/oracle.png",
    // description: (
    //   <>
    //     Docusaurus was designed from the ground up to be easily installed and
    //     used to get your website up and running quickly.
    //   </>
    // ),
    description: "/docs/oracle",
  },
  {
    title: "Web Designing",
    Svg: "img/webdesign.png",
    description: "/learning/docs/category/webdesign",
  },
  {
    title: "HTML",
    Svg: "img/html.png",
    description: "/learning/docs/category/html",
  },
  {
    title: "Javascript",
    Svg: "img/js.png",
    description: "/learning/docs/category/javascript",
  },
  {
    title: "PHP",
    Svg: "img/php.png",
    description: "/learning/docs/category/php",
  },
  {
    title: "Docker",
    Svg: "img/docker.png",
    description: "/learning/docs/category/docker",
  },
  {
    title: "React",
    Svg: "img/react.png",
    description: "/learning/docs/category/react",
  },
  {
    title: "Git",
    Svg: "img/git.png",
    description: "/learning/docs/category/git",
  },
  {
    title: "Kubernetes",
    Svg: "img/kubernetes.png",
    description: "/learning/docs/category/kubernetes",
  },
  {
    title: "GCP",
    Svg: "img/gcp.png",
    description: "/learning/docs/category/gcp",
  },
  {
    title: "AWS",
    Svg: "img/aws.png",
    description: "/learning/docs/category/aws",
  },
  {
    title: "Python",
    Svg: "img/python.png",
    description: "/learning/docs/category/python",
  },
  {
    title: "Data Structures & Algorithms",
    Svg: "img/dsa.png",
    description: "/learning/docs/category/dsa",
  },
  {
    title: "Digital Ocean",
    Svg: "img/digitalocean.png",
    description: "/learning/docs/category/digitalocean",
  },
  {
    title: "IELTS",
    Svg: "img/ielts.png",
    description: "/learning/docs/category/ielts",
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--3")}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <a href={description}>
          <img src={Svg} className={styles.featureSvg} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        {/* <p>{description}</p> */}
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
