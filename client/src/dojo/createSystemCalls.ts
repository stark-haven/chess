import { SetupNetworkResult } from "./setupNetwork";

export type SystemCalls = ReturnType<typeof createSystemCalls>;

export function createSystemCalls({ execute }: SetupNetworkResult) {
  // const initiate_system = async (
  //   game_id: number,
  //   white_address: string,
  //   black_address: string
  // ) => {
  //   const tx = await execute("initiate_system", [
  //     game_id,
  //     white_address,
  //     black_address,
  //   ]);
  //   syncWorker.sync(tx.transaction_hash);
  //   console.log("New Game ", game_id);
  // };

  // const give_up_system = async (game_id: number) => {
  //   const tx = await execute("give_up_system", [game_id]);
  //   syncWorker.sync(tx.transaction_hash);
  //   console.log("Gived up ", game_id);
  // };

  // const execute_move_system = async (
  //   game_id: number,
  //   entity_name: number,
  //   new_position: { x: number; y: number }
  // ) => {
  //   const tx = await execute("execute_move_system", [
  //     game_id,
  //     entity_name,
  //     new_position,
  //   ]);
  //   syncWorker.sync(tx.transaction_hash);
  //   console.log("Moved ", new_position);
  // };

  const spawn = async (props: SpawnSystemProps) => {
    try {
        await execute(props.signer, "actions", "spawn", [props.rps]);
    } catch (e) {
        console.error(e);
    }
};

const move = async (props: MoveSystemProps) => {
    const { signer, direction } = props;

    // TODO: Add optimistic updates

    // 1. get player ID
    // 2. get player by playerID position
    // 3. calculate new position
    // 4. update position

    try {
        const { transaction_hash } = await execute(
            signer,
            "actions",
            "move",
            [direction]
        );

        // logging the transaction hash
        console.log(
            await signer.waitForTransaction(transaction_hash, {
                retryInterval: 100,
            })
        );
    } catch (e) {
        console.error(e);
    }
};

  return {
    // initiate_system,
    // give_up_system,
    // execute_move_system,
  };
}
