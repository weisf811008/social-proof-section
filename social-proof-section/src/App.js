import React from "react";
import styles from "./App.module.css";
import rate from "./Rate.module.css";
import comment from "./Comment.module.css";

import { ReactComponent as IconStar } from "./images/icon-star.svg";
import PictureColton from "./images/image-colton.jpg";
import PictureAnne from "./images/image-anne.jpg";
import PictureIrene from "./images/image-irene.jpg";

function Title({ value }) {
  return <h1 className={styles.title}>{value}</h1>;
}

function Description({ children }) {
  return <p className={styles.description}>{children}</p>;
}

function Rate({ content }) {
  return (
    <div className={rate.rate}>
      <ul>
        <li>
          <IconStar />
        </li>
        <li>
          <IconStar />
        </li>
        <li>
          <IconStar />
        </li>
        <li>
          <IconStar />
        </li>
        <li>
          <IconStar />
        </li>
      </ul>
      <strong>{content}</strong>
    </div>
  );
}

function Comment(props) {
  return (
    <div className={comment.comment}>
      <header>
        <img
          className={comment.avatar}
          src={props.user.photo}
          alt={`${props.user.name}'s avatar`}
        />

        <div className={comment.user}>
          <strong>{props.user.name}</strong>
          <span>
            {props.user.isVerified ? "Verified Buyer" : "Not Verified Yet"}
          </span>
        </div>
      </header>
      <p>{props.connent}</p>
    </div>
  );
}

const clsx = (...classes) => classes.join(" ");
function App() {
  const rates = [
    {
      content: "Rated 5 Stars in Reviews",
    },
    {
      content: "Rated 5 Stars in Report Guru",
    },
    {
      content: "Rated 5 Stars in BestTech",
    },
  ];
  const comments = [
    {
      user: {
        photo: PictureColton,
        name: "Colton Smith",
        isVerified: true,
      },
      connent: `"We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time. Excellent!" Irene Roberts Verified Buyer "`,
    },
    {
      user: {
        photo: PictureIrene,
        name: "Irene ",
        isVerified: true,
      },
      connent: `"Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."`,
    },
    {
      user: {
        photo: PictureAnne,
        name: "Anne Wallace",
        isVerified: true,
      },
      connent: `"Anne Wallace Verified Buyer "Put an order with this company and can only praise them for the very high standard. Will definitely use them again and recommend them to everyone!"
      `,
    },
  ];

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <Title value="10,000+ of our users love our products." />
        <Description>
          We only provide great products combined with excellent customer
          service. See what our satisfied customers are saying about our
          services.
        </Description>
      </header>

      <ul className={clsx(styles.list, styles.rate)}>
        {rates.map((rate) => (
          <li key={rate.content}>
            <Rate {...rate} />
          </li>
        ))}
      </ul>
      <ul className={clsx(styles.list, styles.comment)}>
        {comments.map((comment, i) => (
          <li key={i}>
            <Comment {...comment} />
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
