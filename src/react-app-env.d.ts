/// <reference types="react-scripts" />

export namespace Entities {
    /*************
     *  PROJECT  *
     *************/
    export namespace Project {
        export namespace Types {

        }
        export namespace Interfaces {
            export interface IProjectImageData {
                project_background: string;
                project_hero: string;
                project_slices: string | string[];
            }
            export interface IProject {
                project_name: string;
                project_images: IProjectImageData;
                project_urls: {
                    website: string,
                    repository: string,
                },
            }
        }
    }

    /****************
     *  EXPERIENCE  *
     ****************/
    export namespace Experience {
        export namespace Types {

        }

        export namespace Interfaces {
            export interface IExperience {
                experience_company: Company.Interfaces.ICompany;
                experience_start_date: Date;
                experience_end_date: Date;
                experience_position_details: Position.Interfaces.IPosition;
            }
        }
    }

   /************
    *  COMPANY *
    ************/
    export namespace Company {
        export namespace Types {

        }

        export namespace Interfaces {
            export interface ICompany {
                company_name: string;
                company_location?: string | undefined;
            }
        }
    }

    /******************
     *    POSITION    *
     ******************/
    export namespace Position {
        export namespace Types {

        }

        export namespace Interfaces {
            export interface IPosition {
                position_title: string;
                position_technologies?: string[] | undefined;
            }
        }
    }
}