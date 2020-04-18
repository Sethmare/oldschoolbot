/* eslint-disable @typescript-eslint/no-namespace */
export type CustomGet<K extends string, TCustom> = K & { __type__: TCustom };

export function T<TCustom>(k: string): CustomGet<string, TCustom> {
	return k as CustomGet<string, TCustom>;
}

export namespace GuildSettings {
	export const StaffOnlyChannels = T<readonly string[]>('staffOnlyChannels');
	export const Prefix = T<string>('prefix');
	export const DisabledCommands = T<readonly string[]>('disabledCommands');
	export const Tags = T<readonly [string, string][]>('tags');
	export const HCIMDeaths = T<string>('hcimdeaths');
	export const JMODComments = T<string>('jmodComments');
	export const StreamerTweets = T<string>('streamertweets');
	export const PetChannel = T<string>('petchannel');
	export const JModTweets = T<string>('tweetchannel');
	export namespace TwitchNotifications {
		export const Channel = T<string>('twitchnotifs');
		export const Streamers = T<readonly string[]>('streamers');
	}
	export namespace RandomEvents {
		export const Enabled = T<boolean>('randomEvents.enabled');
		export const RedirectChannel = T<string>('randomEvents.redirectChannel');
	}
}
