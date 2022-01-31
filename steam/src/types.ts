import React, { SetStateAction } from "react";

// Interfaces for Games
export type IGames = {
    id:                 number;
    slug:               string;
    name:               string;
    released:           Date;
    tba:                boolean;
    background_image:   any;
    rating:             number;
    rating_top:         number;
    ratings_count:      number;
    metacritic:         number;
    playtime:           number;
    suggestions_count:  number;
    updated:            Date;
    reviews_count:      number;
    platforms:          Platform[];
    genres:             Genre[];
    stores:             Stores[];
    clip:               null;
    tags:               Genre[];
}

export interface IPlatform {
    id:               number;
    name:             string;
    slug:             string;
    games_count:      number;
    image_background: string;
    image:            null;
    year_start:       null;
    year_end:         null;
    //games:            IGames[];
}

export interface Platform {
    platform:        IPlatform;
    released_at:     Date;
    requirements_en: null;
    requirements_ru: null;
}


export interface Genre {
    id:               number;
    name:             string;
    slug:             string;
    games_count:      number;
    image_background: string;
}

export interface Stores {
    id:    number;
    store: Store;
}

export interface Store {
    id:               number;
    name:             string;
    slug:             string;
    domain:           string;
    games_count:      number;
    image_background: string;
}

// Interface for Details of a Game
export interface IGame {
    id:                          number;
    slug:                        string;
    name:                        string;
    name_original:               string;
    description:                 string;
    metacritic:                  number;
    released:                    Date;
    updated:                     Date;
    background_image:            any;
    background_image_additional: any;
    website:                     string;
    rating:                      number;
    achievements_count:          number;
    reddit_url:                  string;
    reddit_name:                 string;
    reddit_description:          string;
    reddit_logo:                 string;
    metacritic_url:              string;
    platforms:                   Platform[];
    stores:                      Stores[];
    developers:                  Developer[];
    genres:                      Genre[];
    tags:                        Tags[];
    publishers:                  Publishers[];
    description_raw:             string;
}

export interface Developer {
    id:               number;
    name:             string;
    slug:             string;
    games_count:      number;
    image_background: string;
}

export interface Tags {
    id:               number;
    name:             string;
    slug:             string;
    language:         string;
    games_count:      number;
    image_background: string;
}

export interface Publishers {
    id:               number;
    name:             string;
    slug:             string;
    games_count:      number;
    image_background: string;
}

export interface OwnGame {
    id:                          string;
    first_name:                        string;
    last_name:                        string;
    email:                  string;
    game_name:               string;
    description:                 string;
}

export interface Prop {
    gameLocalData: OwnGame[];
    setGameLocalData: React.Dispatch<SetStateAction<any[]>>;
}