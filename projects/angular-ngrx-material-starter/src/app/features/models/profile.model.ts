export class Profile {
    public name: string;
    public languages: string[];
    public technologies: string[];
    public repos: [{
        name: string;
        description: string;
        url: string;
    }];

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

    // public getName(): string {
    //     return this.name;
    // }
    // public getLanguages(): string[] {
    //     return this.languages;
    // }
    // public getTechnologies(): string[] {
    //     return this.languages;
    // }
    // public getRepos(): [{name: string, description: string, url: string}] {
    //     return this.repos;
    // }

    // public setName(name: string): void {
    //     this.name = name;
    // }
    // public setLanguages(languages: string[]): void {
    //     this.languages = languages;
    // }
    // public setTechnologies(technologies: string[]): void {
    //     this.technologies = technologies;
    // }
    // public setRepos(repos: [{name: string, description: string, url: string}]): void {
    //     this.repos = repos;
    // }
}