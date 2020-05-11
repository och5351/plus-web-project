create table category_detail
(
    ca_id     int          null,
    ca_name   varchar(10)  null,
    ca_detail varchar(100) null,
    constraint category_detail_fk
        foreign key (ca_id) references category (ca_id)
);


