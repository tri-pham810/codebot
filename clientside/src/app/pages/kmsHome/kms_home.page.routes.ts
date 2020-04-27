/*
 * @bot-written
 * 
 * WARNING AND NOTICE
 * Any access, download, storage, and/or use of this source code is subject to the terms and conditions of the
 * Full Software Licence as accepted by you before being granted access to this source code and other materials,
 * the terms of which can be accessed on the Codebots website at https://codebots.com/full-software-licence. Any
 * commercial use in contravention of the terms of the Full Software Licence may be pursued by Codebots through
 * licence termination and further legal action, and be required to indemnify Codebots for any loss or damage,
 * including interest and costs. You are deemed to have accepted the terms of the Full Software Licence on any
 * access, download, storage, and/or use of this source code.
 * 
 * BOT WARNING
 * This file is bot-written.
 * Any changes out side of "protected regions" will be lost next time the bot makes any changes.
 */

import {Routes} from '@angular/router';
import {RoleGuard} from '../../lib/guards/role.guard';
import {KmsHomeWrappingTileTileComponent} from '../../tiles/custom/kmsHomeWrappingTile/kms_home_wrapping_tile.tile.component';

// % protected region % [Add any additional imports here] off begin
// % protected region % [Add any additional imports here] end

/**
 * A list of routes that spans across the application.
 */
export const appRoutes: Routes = [
	{
		path: '',
		// % protected region % [Configure component or redirect homepage tile here] off begin
		redirectTo: 'kms-home',
		// % protected region % [Configure component or redirect homepage tile here] end
		pathMatch: 'full',
		// % protected region % [Add any additional route configuration for homepage tile here] off begin
		// % protected region % [Add any additional route configuration for homepage tile here] end
	},
	{
		path: 'kms-home',
		children: [
			{
				path: '',
				pathMatch: 'full',
				redirectTo: 'kms-home-wrapping-tile',
			},
			{
				path: 'kms-home-wrapping-tile',
				// % protected region % [Configure component or redirect for KMS Home Wrapping Tile here] off begin
				component: KmsHomeWrappingTileTileComponent,
				// % protected region % [Configure component or redirect for KMS Home Wrapping Tile here] end
				canActivate: [
					RoleGuard,
					// % protected region % [Add any additional guards for KMS Home Wrapping Tile here] off begin
					// % protected region % [Add any additional guards for KMS Home Wrapping Tile here] end
				],
				data: {
					expectedRoles: [
						// % protected region % [Add additional roles here] off begin
						// % protected region % [Add additional roles here] end
					],
					// % protected region % [Customise your data passed to data for KMS Home Wrapping Tile here] off begin
					// % protected region % [Customise your data passed to data for KMS Home Wrapping Tile here] end
				},
				// % protected region % [Add any additional route configuration for KMS Home Wrapping Tile here] off begin
				// % protected region % [Add any additional route configuration for KMS Home Wrapping Tile here] end
			},
		]
	}
	// % protected region % [Add any additional routes here] off begin
	// % protected region % [Add any additional routes here] end
];
