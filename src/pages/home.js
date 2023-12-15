import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";



const Home = () => {
    const [posts, setPosts] = useState([])

    const cat = useLocation().search

    const po = [
    {
      id: 1,
      title: "Welcome to the Geeks Project",
      desc: "Write what you want to write, then on the mood bar, cross out your joys and sorrows",
      img: "https://wallpaperaccess.com/full/4827189.jpg",
    },
    {
      id: 2,
      title: "Best game of the year",
      desc: "The Game Awards 2023 celebrated the gaming world in a stunning event, and the list of winners is full of surprises and well-deserved accolades. With an impressive variety of titles and categories, the list reflects the wide range of innovation and quality in the gaming industry.",
      img: "https://dailygame.at/wp-content/uploads/2023/12/baldurs-gate-3-spiel-des-jahres-2023-765x470.jpg.webp",
    },
    {
      id: 3,
      title: "The Godfather",
      desc: "He is the last Godfather, the ruler of the underground world. No one can speculate on the Godfather's final plot, no one can stop the family's ultimate ambition. There is no justice, only victory.",
      img: "https://ntvb.tmsimg.com/assets/p6326_v_h8_be.jpg?w=1280&h=720",
    },
    {
      id: 4,
      title: "How to make good steak",
      desc: "Sprinkle the tops of the steaks with some cracked black pepper and sea salt. Find a heavy-bottomed skillet that can be dry-heated, preferably one with cast iron to store a lot of heat. Dry sear the pan for 1 minute while the butter melts in the pan. Add the steak to the pan and press it down a few times with tongs to get even heat. 1-2 minutes before flipping it over, a normal 2-3cm thick steak can usually be seared to medium rare in 3-4 minutes. The difficulty with pan-frying steaks is that they may be different each time and you can only feel your hand slowly, and there is really no way to quantify the time particularly carefully for this.",
      img: "https://img2.baidu.com/it/u=2634851342,971965499&fm=253&fmt=auto&app=138&f=JPEG?w=857&h=500",
    },
  ];



    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/posts${cat}`);
                setPosts(res.data)
            } catch (err) {
                console.log(err)
            }
        };
        fetchData();
    }, [cat]);


    return (
        <div className="home">
            <div className="posts">
                {po.map((post) => (
                    <div className="post" key={post.id}>
                        <div className="img">
                            <img src={post.img} alt="" />
                        </div>
                        <div className="content">
                            <Link className="link" to={`/post/${post.id}`}>
                                <h1>{post.title}</h1>
                            </Link>
                            <p>{post.desc}</p>
                            <button>Read More</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
