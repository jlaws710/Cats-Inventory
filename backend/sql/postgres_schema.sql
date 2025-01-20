create table if not exists Cats (
                                    cat_id SERIAL NOT NULL,
                                    name VARCHAR,
                                    temperament VARCHAR,
                                    origin VARCHAR,
                                    description VARCHAR,
                                    life_span VARCHAR,
                                    adaptability int,
                                    affection_level int,
                                    energy_level int,
                                    grooming int,
                                    health_issues int,
                                    wikipedia_url VARCHAR,
                                    image_id VARCHAR,
                                    image_width int,
                                    image_height int,
                                    image_url VARCHAR
                                );