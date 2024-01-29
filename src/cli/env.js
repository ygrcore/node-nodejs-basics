const parseEnv = () => {
    const envKeys = Object.keys(process.env);

    const rssKeys = envKeys.filter(key => key.startsWith('RSS_'));

    const resultString = rssKeys.map(key => `${key}=${process.env[key]}`).join('; ');

    console.log(resultString);
};

parseEnv();