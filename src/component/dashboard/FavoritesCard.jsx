import React, { useContext } from "react";
import "../../styles/component/dashboard/FavoritesCard.css";
import DotsVerticalIcon from "../icons/dots-vertical";
import { Link } from "react-router";
import PhoneIcon from "../icons/phone";
import Edit1Icon from "../icons/edit-1";
import { GlobalContext } from "../../context/Context";

const favorites = [
    {
        name: "Phoenix Baker",
        username: "@phoenix.baker",
        likes: 24,
        img: "dashboard/avatar_phoenix_baker.png",
        icon: "phone",
    },
    {
        name: "Lana Steiner",
        username: "@lanasteiner",
        likes: 22,
        img: "dashboard/avatar_lana_steiner.png",
        icon: "phone",
    },
    {
        name: "Demi Wilkinson",
        username: "@demi_wilkinson",
        likes: 22,
        img: "dashboard/avatar_demi_wilkinson.png",
        icon: "edit",
    },
    {
        name: "Candice Wu",
        username: "@candicewu",
        likes: 20,
        img: "dashboard/avatar_candice_wu.png",
        icon: "edit",
    },
    {
        name: "Phoenix Baker",
        username: "@phoenix.baker",
        likes: 24,
        img: "dashboard/avatar_phoenix_baker.png",
        icon: "phone",
    },
    {
        name: "Lana Steiner",
        username: "@lanasteiner",
        likes: 22,
        img: "dashboard/avatar_lana_steiner.png",
        icon: "phone",
    },
    {
        name: "Demi Wilkinson",
        username: "@demi_wilkinson",
        likes: 22,
        img: "dashboard/avatar_demi_wilkinson.png",
        icon: "edit",
    },
    {
        name: "Candice Wu",
        username: "@candicewu",
        likes: 20,
        img: "dashboard/avatar_candice_wu.png",
        icon: "edit",
    },
];


const FavoritesCard = () => {
    let { state } = useContext(GlobalContext);

    return (
        <div className="card favorites-card">
            <div className="favorites-card__top">
                <div className="favorites-card__header">
                    <span className="favorites-card__title">Favorites</span>
                    <span className="favorites-card__dots"><DotsVerticalIcon /></span>
                </div>
                <div className="favorites-card__list">
                    {favorites.map((fav, i) => (
                        <div className="favorites-card__row" key={i}>
                            <img src={`${state.basePath}/${fav.img}`} alt={fav.name} className="favorites-card__avatar" />
                            <div className="favorites-card__info">
                                <div className="favorites-card__name">{fav.name}</div>
                                <div className="favorites-card__username">{fav.username}</div>
                            </div>
                            <div className="favorites-card__likes">{fav.likes} likes</div>
                            <span className="favorites-card__icon">
                                {fav.icon === "phone" ? (
                                    <PhoneIcon />
                                ) : (
                                    <Edit1Icon />
                                )}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="favorites-card__footer">
                <Link href="#" className="favorites-card__viewall">View all</Link>
            </div>
        </div>
    )
};

export default FavoritesCard;