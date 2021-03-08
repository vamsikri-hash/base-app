import React, {useContext} from "react";
import {
	Popover, Button, Intent, Classes,
} from "@blueprintjs/core";
import {IconNames} from "@blueprintjs/icons";
import styled from "styled-components";
import {UserContext} from "./userContext";
import {AppToaster} from "../AppToaster";

const PopoverContent = styled.div`
  width: 300px;
  padding: 20px;
`;
export const ConfirmDeleteUser = ({userId}) => {
	const userContext = useContext(UserContext);
	const {deleteUser} = userContext;
	return (
		<div>
			<Popover icon="info-sign" title="Palantir Foundry">
				<Button text="Delete" icon={IconNames.TRASH} intent={Intent.DANGER} data-testid="usr-del" />
				<PopoverContent data-testid="popover">
					<h5>Confirm deletion</h5>
					<p>
            Are you sure you want to delete these items? You won't be able to
            recover them.
					</p>
					<div
						style={{
							display: "flex",
							justifyContent: "flex-end",
							marginTop: 15,
						}}
					>
						<Button
							text="cancel"
							className={Classes.POPOVER_DISMISS}
							style={{marginRight: 10}}
							data-testid="cancel"
							onClick={()=>{console.log("cancel clicked");}}
						/>

						<Button
							text="Confirm"
							intent={Intent.DANGER}
							onClick={() => {
								console.log("confirm clicked");
								deleteUser(userId);
								AppToaster.show({message: "user deleted successfully", intent: Intent.DANGER});
							}}
							data-testid="confirm"
						/>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};
