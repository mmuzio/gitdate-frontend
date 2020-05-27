/**
 * The profile class is used for encapsulating
 * all of the user's profile information contained
 * in their gitdate.json file
 */
export class Profile {

    /**
     * The user's profile name
     */
    public name: string;

    /**
     * The user's preffered languages 
     */
    public languages: string[];

    /**
     * The user's preffered technologies
     */
    public technologies: string[];

    /**
     * The user's highlighted repos
     */
    public repos: [{
        name: string;
        description: string;
        url: string;
        languages?: string[]
    }];

    /**
     * Create a new profile
     * @param name The profile name
     * @param languages The profile languages
     * @param technologies The profile technologies
     * @param repos The profile repos
     */
    constructor(name: string,
                languages: string[],
                technologies: string[],
                repos: [{
                    name: string,
                    description: string,
                    url: string
                }]) {
        this.name = name;
        this.languages = languages;
        this.technologies = technologies;
        this.repos = repos;

    }
    
}