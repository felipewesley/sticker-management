import { Month } from "../common/types/enums/month.enum";
import { DatabaseSchema } from "../domain/database/database.schema";
import { CountryEnum } from "../domain/enums/country/country.enum";
import { PlayerPositionEnum } from "../domain/enums/player/player-position.enum";

/**
 * ### Mock Database
 */
export const DATABASE: DatabaseSchema = {

    //----------------------------------------------------------------------------------------------------
    // @ Countries
    //----------------------------------------------------------------------------------------------------

    countries: [

        {
            id: CountryEnum.Qatar,
            name: 'Qatar',
            group: 'A',
            prefix: 'QAT',
            teamName: 'Qatar Football Association',
            // teamPictureId: 'QAT1'
        },
        {
            id: CountryEnum.Ecuador,
            name: 'Equador',
            group: 'A',
            prefix: 'ECU',
            teamName: 'Federación Ecuatoriana De Fútbol',
            // teamPictureId: 'ECU1'
        },
        {
            id: CountryEnum.Senegal,
            name: 'Senegal',
            group: 'A',
            prefix: 'SEN',
            teamName: 'Fédération Sénégalaise De Football',
            // teamPictureId: 'SEN1'
        },
        {
            id: CountryEnum.Netherlands,
            name: 'Holanda',
            group: 'A',
            prefix: 'NED',
            teamName: 'Koninklijke Nederlandse Voetbalbond',
            // teamPictureId: 'NED1'
        },
        {
            id: CountryEnum.England,
            name: 'Inglaterra',
            group: 'B',
            prefix: 'ENG',
            teamName: 'The Football Association',
            // teamPictureId: 'ENG1'
        },
        {
            id: CountryEnum.IRIran,
            name: 'Iran',
            group: 'B',
            prefix: 'IRN',
            teamName: 'Football Federation Islamic Republic Of Iran',
        },
        {
            id: CountryEnum.USA,
            name: 'Estados Unidos',
            group: 'B',
            prefix: 'USA',
            teamName: 'U. S. Soccer Federation',
        },
        {
            id: CountryEnum.Wales,
            name: 'País de Gales',
            group: 'B',
            prefix: 'WAL',
            teamName: 'Football Association Of Wales',
        },
        {
            id: CountryEnum.Argentina,
            name: 'Argentina',
            group: 'C',
            prefix: 'ARG',
            teamName: 'Associación Del Fútbol Argentino',
        },
        {
            id: CountryEnum.SaudiArabia,
            name: 'Arábia Saudita',
            group: 'C',
            prefix: 'KSA',
            teamName: 'Saudi Arabian Football Federation',
        },
        {
            id: CountryEnum.Mexico,
            name: 'México',
            group: 'C',
            prefix: 'MEX',
            teamName: 'Federación Mexicana De Fútbol Asociación, A.C.',
        },
        {
            id: CountryEnum.Poland,
            name: 'Polônia',
            group: 'C',
            prefix: 'POL',
            teamName: 'Polski Zwiazek Pilki Noznej',
        },
        {
            id: CountryEnum.France,
            name: 'França',
            group: 'D',
            prefix: 'FRA',
            teamName: 'Fédération Française De Football',
        },
        {
            id: CountryEnum.Australia,
            name: 'Austrália',
            group: 'D',
            prefix: 'AUS',
            teamName: 'Football Australia',
        },
        {
            id: CountryEnum.Denmark,
            name: 'Dinamarca',
            group: 'D',
            prefix: 'DEN',
            teamName: 'Dansk Boldspil-Union',
        },
        {
            id: CountryEnum.Tunisia,
            name: 'Tunísia',
            group: 'D',
            prefix: 'TUN',
            teamName: 'Fédération Tunisienne De Football',
        },
        {
            id: CountryEnum.Spain,
            name: 'Espanha',
            group: 'E',
            prefix: 'ESP',
            teamName: 'Real Federación Española De Fútbol',
        },
        {
            id: CountryEnum.CostaRica,
            name: 'Costa Rica',
            group: 'E',
            prefix: 'CRC',
            teamName: 'Federación Costarricense De Fútbol',
        },
        {
            id: CountryEnum.Germany,
            name: 'Alemanha',
            group: 'E',
            prefix: 'GER',
            teamName: 'Deutscher Fussball-Bund',
        },
        {
            id: CountryEnum.Japan,
            name: 'Japão',
            group: 'E',
            prefix: 'JPN',
            teamName: 'Japan Football Association',
        },
        {
            id: CountryEnum.Belgium,
            name: 'Bélgica',
            group: 'F',
            prefix: 'BEL',
            teamName: 'Union Royale Belge Des Sociétés De Football-Association Koninklijke Belgische Voetbalbond',
        },
        {
            id: CountryEnum.Canada,
            name: 'Canadá',
            group: 'F',
            prefix: 'CAN',
            teamName: 'Canadian Soccer Association',
        },
        {
            id: CountryEnum.Morocco,
            name: 'Marrocos',
            group: 'F',
            prefix: 'MAR',
            teamName: 'Fédération Royale Marocaine De Football',
        },
        {
            id: CountryEnum.Croatia,
            name: 'Croácia',
            group: 'F',
            prefix: 'CRO',
            teamName: 'Hrvatski Nogometni Savez',
        },
        {
            id: CountryEnum.Brazil,
            name: 'Brasil',
            group: 'G',
            prefix: 'BRA',
            teamName: 'Confederação Brasileira De Futebol',
        },
        {
            id: CountryEnum.Serbia,
            name: 'Sérvia',
            group: 'G',
            prefix: 'SRB',
            teamName: 'Football Association Of Serbia',
        },
        {
            id: CountryEnum.Switzerland,
            name: 'Suíça',
            group: 'G',
            prefix: 'SUI',
            teamName: 'Schweizerischer Fussballverband',
        },
        {
            id: CountryEnum.Cameroon,
            name: 'Camarões',
            group: 'G',
            prefix: 'CMR',
            teamName: 'Fédération Camerounaise De Football',
        },
        {
            id: CountryEnum.Portual,
            name: 'Portugal',
            group: 'H',
            prefix: 'POR',
            teamName: 'Federação Portuguesa De Futebol',
        },
        {
            id: CountryEnum.Ghana,
            name: 'Gana',
            group: 'H',
            prefix: 'GHA',
            teamName: 'Ghana Football Association',
        },
        {
            id: CountryEnum.Uruguay,
            name: 'Uruguai',
            group: 'H',
            prefix: 'URU',
            teamName: 'Asociación Uruguaya De Fútbol',
        },
        {
            id: CountryEnum.KoreaRepublic,
            name: 'República da Coreia',
            group: 'H',
            prefix: 'KOR',
            teamName: 'Korea Football Association',
        }

    ],

    //----------------------------------------------------------------------------------------------------
    // @ Stadiums
    //----------------------------------------------------------------------------------------------------

    stadiums: [

        {
            id: 'FWC8',
            name: 'Ahmad Bin Ali Stadium',
            capacity: 40000,
            finalMatch: false,
            openingMatch: false
        },

        {
            id: 'FWC9',
            name: 'Al Janoub Stadium',
            capacity: 40000,
            finalMatch: false,
            openingMatch: false
        },

        {
            id: 'FWC10',
            name: 'Al Thumama Stadium',
            capacity: 40000,
            finalMatch: false,
            openingMatch: false
        },

        {
            id: 'FWC11',
            name: 'Education City Stadium',
            capacity: 40000,
            finalMatch: false,
            openingMatch: false
        },

        {
            id: 'FWC12',
            name: 'Khalifa International Stadium',
            capacity: 40000,
            finalMatch: false,
            openingMatch: false
        },

        {
            id: 'FWC13',
            name: 'Stadium 974',
            capacity: 40000,
            finalMatch: false,
            openingMatch: false
        },

        {
            id: 'FWC14',
            name: 'Al Bayt Stadium',
            capacity: 60000,
            finalMatch: false,
            openingMatch: true
        },

        {
            id: 'FWC15',
            name: 'Al Bayt Stadium',
            capacity: 60000,
            finalMatch: false,
            openingMatch: true
        },

        {
            id: 'FWC16',
            name: 'Lusail Stadium',
            capacity: 80000,
            finalMatch: true,
            openingMatch: false
        },

        {
            id: 'FWC17',
            name: 'Lusail Stadium',
            capacity: 80000,
            finalMatch: true,
            openingMatch: false
        },

    ],

    //----------------------------------------------------------------------------------------------------
    // @ Players
    //----------------------------------------------------------------------------------------------------

    players: [

        // ==================================================
        // >>> Brazil
        // ==================================================
        
        {
            id: 'BRA3',
            name: 'Alisson',
            birthDate: new Date(1992, Month.October, 2),
            hasExtraCromo: false,
            nationalTeamDebutYear: 2015,
            height: 1.91,
            weight: 91,
            position: PlayerPositionEnum.Goalkeeper,
            countryId: CountryEnum.Brazil
        }

    ]

}