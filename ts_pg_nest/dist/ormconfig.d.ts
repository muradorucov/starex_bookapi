declare const ormconfig: {
    type: string;
    host: string | undefined;
    main: string | undefined;
    port: number;
    username: string | undefined;
    password: string | undefined;
    database: string | undefined;
    entities: string[];
    synchronize: boolean;
    ssl: boolean;
};
export default ormconfig;
